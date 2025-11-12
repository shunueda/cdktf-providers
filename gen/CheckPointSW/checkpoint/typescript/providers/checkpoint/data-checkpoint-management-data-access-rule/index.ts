// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementDataAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of resource fields that will use object UIDs as object identifiers. Default is object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule#fields_with_uid_identifier DataCheckpointManagementDataAccessRule#fields_with_uid_identifier}
  */
  readonly fieldsWithUidIdentifier?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule#id DataCheckpointManagementDataAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Layer that the rule belongs to identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule#layer DataCheckpointManagementDataAccessRule#layer}
  */
  readonly layer: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule#name DataCheckpointManagementDataAccessRule#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule#uid DataCheckpointManagementDataAccessRule#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementDataAccessRuleUserCheckCustomFrequency {
}

export function dataCheckpointManagementDataAccessRuleUserCheckCustomFrequencyToTerraform(struct?: DataCheckpointManagementDataAccessRuleUserCheckCustomFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataAccessRuleUserCheckCustomFrequencyToHclTerraform(struct?: DataCheckpointManagementDataAccessRuleUserCheckCustomFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataAccessRuleUserCheckCustomFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataAccessRuleUserCheckCustomFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataAccessRuleUserCheckCustomFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // every - computed: true, optional: false, required: false
  public get every() {
    return this.getNumberAttribute('every');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataCheckpointManagementDataAccessRuleUserCheckCustomFrequencyList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataAccessRuleUserCheckCustomFrequencyOutputReference {
    return new DataCheckpointManagementDataAccessRuleUserCheckCustomFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataAccessRuleUserCheck {
}

export function dataCheckpointManagementDataAccessRuleUserCheckToTerraform(struct?: DataCheckpointManagementDataAccessRuleUserCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataAccessRuleUserCheckToHclTerraform(struct?: DataCheckpointManagementDataAccessRuleUserCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataAccessRuleUserCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataAccessRuleUserCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataAccessRuleUserCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confirm - computed: true, optional: false, required: false
  public get confirm() {
    return this.getStringAttribute('confirm');
  }

  // custom_frequency - computed: true, optional: false, required: false
  private _customFrequency = new DataCheckpointManagementDataAccessRuleUserCheckCustomFrequencyList(this, "custom_frequency", false);
  public get customFrequency() {
    return this._customFrequency;
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // interaction - computed: true, optional: false, required: false
  public get interaction() {
    return this.getStringAttribute('interaction');
  }
}

export class DataCheckpointManagementDataAccessRuleUserCheckList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataAccessRuleUserCheckOutputReference {
    return new DataCheckpointManagementDataAccessRuleUserCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataAccessRuleVpnDirectional {
}

export function dataCheckpointManagementDataAccessRuleVpnDirectionalToTerraform(struct?: DataCheckpointManagementDataAccessRuleVpnDirectional): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataAccessRuleVpnDirectionalToHclTerraform(struct?: DataCheckpointManagementDataAccessRuleVpnDirectional): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataAccessRuleVpnDirectionalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataAccessRuleVpnDirectional | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataAccessRuleVpnDirectional | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataCheckpointManagementDataAccessRuleVpnDirectionalList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataAccessRuleVpnDirectionalOutputReference {
    return new DataCheckpointManagementDataAccessRuleVpnDirectionalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule checkpoint_management_data_access_rule}
*/
export class DataCheckpointManagementDataAccessRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_data_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementDataAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementDataAccessRule to import
  * @param importFromId The id of the existing DataCheckpointManagementDataAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementDataAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_data_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_access_rule checkpoint_management_data_access_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementDataAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementDataAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_data_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fieldsWithUidIdentifier = config.fieldsWithUidIdentifier;
    this._id = config.id;
    this._layer = config.layer;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // action_settings - computed: true, optional: false, required: false
  private _actionSettings = new cdktf.StringMap(this, "action_settings");
  public get actionSettings() {
    return this._actionSettings;
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return cdktf.Fn.tolist(this.getListAttribute('content'));
  }

  // content_direction - computed: true, optional: false, required: false
  public get contentDirection() {
    return this.getStringAttribute('content_direction');
  }

  // content_negate - computed: true, optional: false, required: false
  public get contentNegate() {
    return this.getBooleanAttribute('content_negate');
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new cdktf.StringMap(this, "custom_fields");
  public get customFields() {
    return this._customFields;
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return cdktf.Fn.tolist(this.getListAttribute('destination'));
  }

  // destination_negate - computed: true, optional: false, required: false
  public get destinationNegate() {
    return this.getBooleanAttribute('destination_negate');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fields_with_uid_identifier - computed: false, optional: true, required: false
  private _fieldsWithUidIdentifier?: string[]; 
  public get fieldsWithUidIdentifier() {
    return cdktf.Fn.tolist(this.getListAttribute('fields_with_uid_identifier'));
  }
  public set fieldsWithUidIdentifier(value: string[]) {
    this._fieldsWithUidIdentifier = value;
  }
  public resetFieldsWithUidIdentifier() {
    this._fieldsWithUidIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsWithUidIdentifierInput() {
    return this._fieldsWithUidIdentifier;
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

  // inline_layer - computed: true, optional: false, required: false
  public get inlineLayer() {
    return this.getStringAttribute('inline_layer');
  }

  // install_on - computed: true, optional: false, required: false
  public get installOn() {
    return cdktf.Fn.tolist(this.getListAttribute('install_on'));
  }

  // layer - computed: false, optional: false, required: true
  private _layer?: string; 
  public get layer() {
    return this.getStringAttribute('layer');
  }
  public set layer(value: string) {
    this._layer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer;
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

  // service - computed: true, optional: false, required: false
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }

  // service_negate - computed: true, optional: false, required: false
  public get serviceNegate() {
    return this.getBooleanAttribute('service_negate');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return cdktf.Fn.tolist(this.getListAttribute('source'));
  }

  // source_negate - computed: true, optional: false, required: false
  public get sourceNegate() {
    return this.getBooleanAttribute('source_negate');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return cdktf.Fn.tolist(this.getListAttribute('time'));
  }

  // track - computed: true, optional: false, required: false
  private _track = new cdktf.StringMap(this, "track");
  public get track() {
    return this._track;
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

  // user_check - computed: true, optional: false, required: false
  private _userCheck = new DataCheckpointManagementDataAccessRuleUserCheckList(this, "user_check", false);
  public get userCheck() {
    return this._userCheck;
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getStringAttribute('vpn');
  }

  // vpn_communities - computed: true, optional: false, required: false
  public get vpnCommunities() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_communities'));
  }

  // vpn_directional - computed: true, optional: false, required: false
  private _vpnDirectional = new DataCheckpointManagementDataAccessRuleVpnDirectionalList(this, "vpn_directional", false);
  public get vpnDirectional() {
    return this._vpnDirectional;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fields_with_uid_identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldsWithUidIdentifier),
      id: cdktf.stringToTerraform(this._id),
      layer: cdktf.stringToTerraform(this._layer),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fields_with_uid_identifier: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldsWithUidIdentifier),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer: {
        value: cdktf.stringToHclTerraform(this._layer),
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
