// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementThreatProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_profile#id DataCheckpointManagementThreatProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_profile#name DataCheckpointManagementThreatProfile#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_profile#uid DataCheckpointManagementThreatProfile#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValues {
}

export function dataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValuesToTerraform(struct?: DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValuesToHclTerraform(struct?: DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValuesOutputReference {
    return new DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributes {
}

export function dataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesToTerraform(struct?: DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesToHclTerraform(struct?: DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesOutputReference {
    return new DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues {
}

export function dataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesToTerraform(struct?: DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesToHclTerraform(struct?: DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesOutputReference {
    return new DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributes {
}

export function dataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesToTerraform(struct?: DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesToHclTerraform(struct?: DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesOutputReference {
    return new DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementThreatProfileIndicatorOverrides {
}

export function dataCheckpointManagementThreatProfileIndicatorOverridesToTerraform(struct?: DataCheckpointManagementThreatProfileIndicatorOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatProfileIndicatorOverridesToHclTerraform(struct?: DataCheckpointManagementThreatProfileIndicatorOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatProfileIndicatorOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementThreatProfileIndicatorOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatProfileIndicatorOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // indicator - computed: true, optional: false, required: false
  public get indicator() {
    return this.getStringAttribute('indicator');
  }
}

export class DataCheckpointManagementThreatProfileIndicatorOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatProfileIndicatorOverridesOutputReference {
    return new DataCheckpointManagementThreatProfileIndicatorOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementThreatProfileOverrides {
}

export function dataCheckpointManagementThreatProfileOverridesToTerraform(struct?: DataCheckpointManagementThreatProfileOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatProfileOverridesToHclTerraform(struct?: DataCheckpointManagementThreatProfileOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatProfileOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementThreatProfileOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatProfileOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // capture_packets - computed: true, optional: false, required: false
  public get capturePackets() {
    return this.getBooleanAttribute('capture_packets');
  }

  // default - computed: true, optional: false, required: false
  private _default = new cdktf.StringMap(this, "default");
  public get default() {
    return this._default;
  }

  // final - computed: true, optional: false, required: false
  private _final = new cdktf.StringMap(this, "final");
  public get final() {
    return this._final;
  }

  // protection - computed: true, optional: false, required: false
  public get protection() {
    return this.getStringAttribute('protection');
  }

  // protection_external_info - computed: true, optional: false, required: false
  public get protectionExternalInfo() {
    return cdktf.Fn.tolist(this.getListAttribute('protection_external_info'));
  }

  // protection_uid - computed: true, optional: false, required: false
  public get protectionUid() {
    return this.getStringAttribute('protection_uid');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }
}

export class DataCheckpointManagementThreatProfileOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatProfileOverridesOutputReference {
    return new DataCheckpointManagementThreatProfileOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_profile checkpoint_management_threat_profile}
*/
export class DataCheckpointManagementThreatProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_threat_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementThreatProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementThreatProfile to import
  * @param importFromId The id of the existing DataCheckpointManagementThreatProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementThreatProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_threat_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_profile checkpoint_management_threat_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementThreatProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementThreatProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_threat_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_protections_by_extended_attributes - computed: true, optional: false, required: false
  private _activateProtectionsByExtendedAttributes = new DataCheckpointManagementThreatProfileActivateProtectionsByExtendedAttributesList(this, "activate_protections_by_extended_attributes", false);
  public get activateProtectionsByExtendedAttributes() {
    return this._activateProtectionsByExtendedAttributes;
  }

  // active_protections_performance_impact - computed: true, optional: false, required: false
  public get activeProtectionsPerformanceImpact() {
    return this.getStringAttribute('active_protections_performance_impact');
  }

  // active_protections_severity - computed: true, optional: false, required: false
  public get activeProtectionsSeverity() {
    return this.getStringAttribute('active_protections_severity');
  }

  // anti_bot - computed: true, optional: false, required: false
  public get antiBot() {
    return this.getBooleanAttribute('anti_bot');
  }

  // anti_virus - computed: true, optional: false, required: false
  public get antiVirus() {
    return this.getBooleanAttribute('anti_virus');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // confidence_level_high - computed: true, optional: false, required: false
  public get confidenceLevelHigh() {
    return this.getStringAttribute('confidence_level_high');
  }

  // confidence_level_low - computed: true, optional: false, required: false
  public get confidenceLevelLow() {
    return this.getStringAttribute('confidence_level_low');
  }

  // confidence_level_medium - computed: true, optional: false, required: false
  public get confidenceLevelMedium() {
    return this.getStringAttribute('confidence_level_medium');
  }

  // deactivate_protections_by_extended_attributes - computed: true, optional: false, required: false
  private _deactivateProtectionsByExtendedAttributes = new DataCheckpointManagementThreatProfileDeactivateProtectionsByExtendedAttributesList(this, "deactivate_protections_by_extended_attributes", false);
  public get deactivateProtectionsByExtendedAttributes() {
    return this._deactivateProtectionsByExtendedAttributes;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // indicator_overrides - computed: true, optional: false, required: false
  private _indicatorOverrides = new DataCheckpointManagementThreatProfileIndicatorOverridesList(this, "indicator_overrides", false);
  public get indicatorOverrides() {
    return this._indicatorOverrides;
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getBooleanAttribute('ips');
  }

  // ips_settings - computed: true, optional: false, required: false
  private _ipsSettings = new cdktf.StringMap(this, "ips_settings");
  public get ipsSettings() {
    return this._ipsSettings;
  }

  // malicious_mail_policy_settings - computed: true, optional: false, required: false
  private _maliciousMailPolicySettings = new cdktf.StringMap(this, "malicious_mail_policy_settings");
  public get maliciousMailPolicySettings() {
    return this._maliciousMailPolicySettings;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataCheckpointManagementThreatProfileOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // scan_malicious_links - computed: true, optional: false, required: false
  private _scanMaliciousLinks = new cdktf.StringMap(this, "scan_malicious_links");
  public get scanMaliciousLinks() {
    return this._scanMaliciousLinks;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // threat_emulation - computed: true, optional: false, required: false
  public get threatEmulation() {
    return this.getBooleanAttribute('threat_emulation');
  }

  // threat_extraction - computed: true, optional: false, required: false
  public get threatExtraction() {
    return this.getBooleanAttribute('threat_extraction');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // use_extended_attributes - computed: true, optional: false, required: false
  public get useExtendedAttributes() {
    return this.getBooleanAttribute('use_extended_attributes');
  }

  // use_indicators - computed: true, optional: false, required: false
  public get useIndicators() {
    return this.getBooleanAttribute('use_indicators');
  }

  // zero_phishing - computed: true, optional: false, required: false
  public get zeroPhishing() {
    return this.getBooleanAttribute('zero_phishing');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
