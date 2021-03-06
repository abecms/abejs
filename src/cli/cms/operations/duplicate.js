import path from 'path'
import extend from 'extend'

import {
  abeExtend,
  Manager,
  config,
  coreUtils,
  cmsData,
  cmsTemplates,
  cmsOperations
} from '../../'

async function duplicate(
  oldPostUrl,
  template,
  newPath,
  name,
  req,
  isUpdate = false,
  user
) {
    abeExtend.hooks.instance.trigger(
      'beforeDuplicate',
      oldPostUrl,
      template,
      newPath,
      name,
      req,
      isUpdate
    )

    let json = {}
    let revisions = []
    const newPostUrl = path.posix.join('/', newPath, coreUtils.slug.clean(name))
    if (oldPostUrl != null) {
      const files = Manager.instance.getList()
      const oldDocPath = cmsData.utils.getDocRelativePathFromPostUrl(oldPostUrl)
      let posts = []
      posts = coreUtils.array.filter(files, 'path', oldDocPath)

      if (posts.length > 0 && posts[0].revisions != null) {
        revisions = posts[0].revisions
        if (revisions != null && revisions[0] != null) {
          json = await cmsData.revision.getDoc(revisions[0].path)
          json = extend(true, json, req.body)

          delete json.abe_meta
        }
      }
    }

    abeExtend.hooks.instance.trigger(
      'afterDuplicate',
      json,
      oldPostUrl,
      template,
      newPath,
      name,
      req,
      isUpdate
    )

    // If duplicate, I remove the unwanted values during duplication (attribute "duplicate='false'" in Abe tags)
    if (!isUpdate) {
      var templateText = cmsTemplates.template.getTemplate(template)
      json = cmsData.values.removeDuplicate(templateText, json)
    }

    var resSave = await cmsOperations.create(template, newPostUrl, json, user)
    if (isUpdate && oldPostUrl !== newPostUrl) {
      abeExtend.hooks.instance.trigger(
        'beforeUpdate',
        json,
        oldPostUrl,
        template,
        newPath,
        name,
        req,
        isUpdate
      )
      cmsOperations.remove.remove(oldPostUrl)
    }
    return (resSave)

}

export default duplicate