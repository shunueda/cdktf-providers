// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#metadata DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#metadata}
  */
  readonly metadata: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadata;
  /**
  * OktaImportRule resource definition v1 from Teleport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#spec DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#spec}
  */
  readonly spec?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpec;
}
export interface DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#annotations DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#labels DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#name DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#namespace DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadataToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadataToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#key DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#value DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabelsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabelsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatch {
  /**
  * AppIDs is a list of app IDs to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#app_ids DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#app_ids}
  */
  readonly appIds?: string[];
  /**
  * AppNameRegexes is a list of regexes to match against app names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#app_name_regexes DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#app_name_regexes}
  */
  readonly appNameRegexes?: string[];
  /**
  * GroupIDs is a list of group IDs to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#group_ids DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * GroupNameRegexes is a list of regexes to match against group names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#group_name_regexes DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#group_name_regexes}
  */
  readonly groupNameRegexes?: string[];
}

export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    app_name_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appNameRegexes),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    group_name_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupNameRegexes),
  }
}


export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    app_name_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appNameRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_name_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupNameRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._appNameRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.appNameRegexes = this._appNameRegexes;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._groupNameRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNameRegexes = this._groupNameRegexes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appIds = undefined;
      this._appNameRegexes = undefined;
      this._groupIds = undefined;
      this._groupNameRegexes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appIds = value.appIds;
      this._appNameRegexes = value.appNameRegexes;
      this._groupIds = value.groupIds;
      this._groupNameRegexes = value.groupNameRegexes;
    }
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return this.getListAttribute('app_ids');
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // app_name_regexes - computed: false, optional: true, required: false
  private _appNameRegexes?: string[]; 
  public get appNameRegexes() {
    return this.getListAttribute('app_name_regexes');
  }
  public set appNameRegexes(value: string[]) {
    this._appNameRegexes = value;
  }
  public resetAppNameRegexes() {
    this._appNameRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameRegexesInput() {
    return this._appNameRegexes;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // group_name_regexes - computed: false, optional: true, required: false
  private _groupNameRegexes?: string[]; 
  public get groupNameRegexes() {
    return this.getListAttribute('group_name_regexes');
  }
  public set groupNameRegexes(value: string[]) {
    this._groupNameRegexes = value;
  }
  public resetGroupNameRegexes() {
    this._groupNameRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameRegexesInput() {
    return this._groupNameRegexes;
  }
}

export class DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchOutputReference {
    return new DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappings {
  /**
  * AddLabels specifies which labels to add if any of the previous matches match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#add_labels DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#add_labels}
  */
  readonly addLabels?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabels;
  /**
  * Match is a set of matching rules for this mapping. If any of these match, then the mapping will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#match DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#match}
  */
  readonly match?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatch[] | cdktf.IResolvable;
}

export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_labels: dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabelsToTerraform(struct!.addLabels),
    match: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchToTerraform, false)(struct!.match),
  }
}


export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_labels: {
      value: dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabelsToHclTerraform(struct!.addLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabels",
    },
    match: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLabels = this._addLabels?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addLabels.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addLabels.internalValue = value.addLabels;
      this._match.internalValue = value.match;
    }
  }

  // add_labels - computed: false, optional: true, required: false
  private _addLabels = new DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabelsOutputReference(this, "add_labels");
  public get addLabels() {
    return this._addLabels;
  }
  public putAddLabels(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsAddLabels) {
    this._addLabels.internalValue = value;
  }
  public resetAddLabels() {
    this._addLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLabelsInput() {
    return this._addLabels.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsOutputReference {
    return new DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpec {
  /**
  * Mappings is a list of matches that will map match conditions to labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#mappings DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#mappings}
  */
  readonly mappings?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappings[] | cdktf.IResolvable;
  /**
  * Priority represents the priority of the rule application. Lower numbered rules will be applied first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#priority DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest#priority}
  */
  readonly priority?: number;
}

export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mappings: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsToTerraform, false)(struct!.mappings),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mappings: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappings.internalValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappings.internalValue = value.mappings;
      this._priority = value.priority;
    }
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest k8s_resources_teleport_dev_teleport_okta_import_rule_v1_manifest}
*/
export class DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_resources_teleport_dev_teleport_okta_import_rule_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest to import
  * @param importFromId The id of the existing DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SResourcesTeleportDevTeleportOktaImportRuleV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_resources_teleport_dev_teleport_okta_import_rule_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_okta_import_rule_v1_manifest k8s_resources_teleport_dev_teleport_okta_import_rule_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_resources_teleport_dev_teleport_okta_import_rule_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestMetadata",
      },
      spec: {
        value: dataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportOktaImportRuleV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
