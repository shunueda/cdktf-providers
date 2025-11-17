// https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#active DdosProtection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Activate BGP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#bgp DdosProtection#bgp}
  */
  readonly bgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#bm_instance_id DdosProtection#bm_instance_id}
  */
  readonly bmInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#id DdosProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#ip_address DdosProtection#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#last_updated DdosProtection#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Profile template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#profile_template DdosProtection#profile_template}
  */
  readonly profileTemplate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#project_id DdosProtection#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#project_name DdosProtection#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#region_id DdosProtection#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#region_name DdosProtection#region_name}
  */
  readonly regionName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#fields DdosProtection#fields}
  */
  readonly fields?: DdosProtectionFields[] | cdktf.IResolvable;
}
export interface DdosProtectionProtocols {
}

export function ddosProtectionProtocolsToTerraform(struct?: DdosProtectionProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ddosProtectionProtocolsToHclTerraform(struct?: DdosProtectionProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DdosProtectionProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosProtectionProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosProtectionProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }
}

export class DdosProtectionProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DdosProtectionProtocolsOutputReference {
    return new DdosProtectionProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosProtectionFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#base_field DdosProtection#base_field}
  */
  readonly baseField: number;
  /**
  * Complex value. Only one of 'value' or 'field_value' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#field_value DdosProtection#field_value}
  */
  readonly fieldValue?: string;
  /**
  * Basic type value. Only one of 'value' or 'field_value' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#value DdosProtection#value}
  */
  readonly value?: string;
}

export function ddosProtectionFieldsToTerraform(struct?: DdosProtectionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_field: cdktf.numberToTerraform(struct!.baseField),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ddosProtectionFieldsToHclTerraform(struct?: DdosProtectionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_field: {
      value: cdktf.numberToHclTerraform(struct!.baseField),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_value: {
      value: cdktf.stringToHclTerraform(struct!.fieldValue),
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

export class DdosProtectionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosProtectionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseField !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseField = this._baseField;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosProtectionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseField = undefined;
      this._fieldValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseField = value.baseField;
      this._fieldValue = value.fieldValue;
      this._value = value.value;
    }
  }

  // base_field - computed: false, optional: false, required: true
  private _baseField?: number; 
  public get baseField() {
    return this.getNumberAttribute('base_field');
  }
  public set baseField(value: number) {
    this._baseField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseFieldInput() {
    return this._baseField;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // field_type - computed: true, optional: false, required: false
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }

  // field_value - computed: false, optional: true, required: false
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  public resetFieldValue() {
    this._fieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // validation_schema - computed: true, optional: false, required: false
  public get validationSchema() {
    return this.getStringAttribute('validation_schema');
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

export class DdosProtectionFieldsList extends cdktf.ComplexList {
  public internalValue? : DdosProtectionFields[] | cdktf.IResolvable

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
  public get(index: number): DdosProtectionFieldsOutputReference {
    return new DdosProtectionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection gcore_ddos_protection}
*/
export class DdosProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_ddos_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosProtection to import
  * @param importFromId The id of the existing DdosProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_ddos_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/ddos_protection gcore_ddos_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: DdosProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_ddos_protection',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.4',
        providerVersionConstraint: '0.31.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._bgp = config.bgp;
    this._bmInstanceId = config.bmInstanceId;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._lastUpdated = config.lastUpdated;
    this._profileTemplate = config.profileTemplate;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._fields.internalValue = config.fields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp?: boolean | cdktf.IResolvable; 
  public get bgp() {
    return this.getBooleanAttribute('bgp');
  }
  public set bgp(value: boolean | cdktf.IResolvable) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
  }

  // bm_instance_id - computed: false, optional: false, required: true
  private _bmInstanceId?: string; 
  public get bmInstanceId() {
    return this.getStringAttribute('bm_instance_id');
  }
  public set bmInstanceId(value: string) {
    this._bmInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bmInstanceIdInput() {
    return this._bmInstanceId;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // profile_template - computed: false, optional: false, required: true
  private _profileTemplate?: number; 
  public get profileTemplate() {
    return this.getNumberAttribute('profile_template');
  }
  public set profileTemplate(value: number) {
    this._profileTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTemplateInput() {
    return this._profileTemplate;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // protocols - computed: true, optional: false, required: false
  private _protocols = new DdosProtectionProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DdosProtectionFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DdosProtectionFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      bgp: cdktf.booleanToTerraform(this._bgp),
      bm_instance_id: cdktf.stringToTerraform(this._bmInstanceId),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      profile_template: cdktf.numberToTerraform(this._profileTemplate),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      fields: cdktf.listMapper(ddosProtectionFieldsToTerraform, true)(this._fields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp: {
        value: cdktf.booleanToHclTerraform(this._bgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bm_instance_id: {
        value: cdktf.stringToHclTerraform(this._bmInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_template: {
        value: cdktf.numberToHclTerraform(this._profileTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(ddosProtectionFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosProtectionFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
