// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexSdcConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#filter DataPowerflexSdc#filter}
  */
  readonly filter?: DataPowerflexSdcFilter;
}
export interface DataPowerflexSdcSdcsLinks {
}

export function dataPowerflexSdcSdcsLinksToTerraform(struct?: DataPowerflexSdcSdcsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdcSdcsLinksToHclTerraform(struct?: DataPowerflexSdcSdcsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdcSdcsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexSdcSdcsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdcSdcsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataPowerflexSdcSdcsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexSdcSdcsLinksOutputReference {
    return new DataPowerflexSdcSdcsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexSdcSdcs {
}

export function dataPowerflexSdcSdcsToTerraform(struct?: DataPowerflexSdcSdcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdcSdcsToHclTerraform(struct?: DataPowerflexSdcSdcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdcSdcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexSdcSdcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdcSdcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexSdcSdcsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // mdm_connection_state - computed: true, optional: false, required: false
  public get mdmConnectionState() {
    return this.getStringAttribute('mdm_connection_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_vmware - computed: true, optional: false, required: false
  public get onVmware() {
    return this.getBooleanAttribute('on_vmware');
  }

  // sdc_approved - computed: true, optional: false, required: false
  public get sdcApproved() {
    return this.getBooleanAttribute('sdc_approved');
  }

  // sdc_guid - computed: true, optional: false, required: false
  public get sdcGuid() {
    return this.getStringAttribute('sdc_guid');
  }

  // sdc_ip - computed: true, optional: false, required: false
  public get sdcIp() {
    return this.getStringAttribute('sdc_ip');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
}

export class DataPowerflexSdcSdcsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexSdcSdcsOutputReference {
    return new DataPowerflexSdcSdcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexSdcFilter {
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#id DataPowerflexSdc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of mdm_connection_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#mdm_connection_state DataPowerflexSdc#mdm_connection_state}
  */
  readonly mdmConnectionState?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#name DataPowerflexSdc#name}
  */
  readonly name?: string[];
  /**
  * Value for on_vmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#on_vmware DataPowerflexSdc#on_vmware}
  */
  readonly onVmware?: boolean | cdktf.IResolvable;
  /**
  * Value for sdc_approved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#sdc_approved DataPowerflexSdc#sdc_approved}
  */
  readonly sdcApproved?: boolean | cdktf.IResolvable;
  /**
  * List of sdc_guid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#sdc_guid DataPowerflexSdc#sdc_guid}
  */
  readonly sdcGuid?: string[];
  /**
  * List of sdc_ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#sdc_ip DataPowerflexSdc#sdc_ip}
  */
  readonly sdcIp?: string[];
  /**
  * List of system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#system_id DataPowerflexSdc#system_id}
  */
  readonly systemId?: string[];
}

export function dataPowerflexSdcFilterToTerraform(struct?: DataPowerflexSdcFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    mdm_connection_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mdmConnectionState),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    on_vmware: cdktf.booleanToTerraform(struct!.onVmware),
    sdc_approved: cdktf.booleanToTerraform(struct!.sdcApproved),
    sdc_guid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sdcGuid),
    sdc_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sdcIp),
    system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemId),
  }
}


export function dataPowerflexSdcFilterToHclTerraform(struct?: DataPowerflexSdcFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mdm_connection_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mdmConnectionState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    on_vmware: {
      value: cdktf.booleanToHclTerraform(struct!.onVmware),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sdc_approved: {
      value: cdktf.booleanToHclTerraform(struct!.sdcApproved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sdc_guid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sdcGuid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sdc_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sdcIp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexSdcFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdcFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mdmConnectionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdmConnectionState = this._mdmConnectionState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onVmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.onVmware = this._onVmware;
    }
    if (this._sdcApproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdcApproved = this._sdcApproved;
    }
    if (this._sdcGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdcGuid = this._sdcGuid;
    }
    if (this._sdcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdcIp = this._sdcIp;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdcFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mdmConnectionState = undefined;
      this._name = undefined;
      this._onVmware = undefined;
      this._sdcApproved = undefined;
      this._sdcGuid = undefined;
      this._sdcIp = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mdmConnectionState = value.mdmConnectionState;
      this._name = value.name;
      this._onVmware = value.onVmware;
      this._sdcApproved = value.sdcApproved;
      this._sdcGuid = value.sdcGuid;
      this._sdcIp = value.sdcIp;
      this._systemId = value.systemId;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mdm_connection_state - computed: false, optional: true, required: false
  private _mdmConnectionState?: string[]; 
  public get mdmConnectionState() {
    return cdktf.Fn.tolist(this.getListAttribute('mdm_connection_state'));
  }
  public set mdmConnectionState(value: string[]) {
    this._mdmConnectionState = value;
  }
  public resetMdmConnectionState() {
    this._mdmConnectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmConnectionStateInput() {
    return this._mdmConnectionState;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_vmware - computed: false, optional: true, required: false
  private _onVmware?: boolean | cdktf.IResolvable; 
  public get onVmware() {
    return this.getBooleanAttribute('on_vmware');
  }
  public set onVmware(value: boolean | cdktf.IResolvable) {
    this._onVmware = value;
  }
  public resetOnVmware() {
    this._onVmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onVmwareInput() {
    return this._onVmware;
  }

  // sdc_approved - computed: false, optional: true, required: false
  private _sdcApproved?: boolean | cdktf.IResolvable; 
  public get sdcApproved() {
    return this.getBooleanAttribute('sdc_approved');
  }
  public set sdcApproved(value: boolean | cdktf.IResolvable) {
    this._sdcApproved = value;
  }
  public resetSdcApproved() {
    this._sdcApproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcApprovedInput() {
    return this._sdcApproved;
  }

  // sdc_guid - computed: false, optional: true, required: false
  private _sdcGuid?: string[]; 
  public get sdcGuid() {
    return cdktf.Fn.tolist(this.getListAttribute('sdc_guid'));
  }
  public set sdcGuid(value: string[]) {
    this._sdcGuid = value;
  }
  public resetSdcGuid() {
    this._sdcGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcGuidInput() {
    return this._sdcGuid;
  }

  // sdc_ip - computed: false, optional: true, required: false
  private _sdcIp?: string[]; 
  public get sdcIp() {
    return cdktf.Fn.tolist(this.getListAttribute('sdc_ip'));
  }
  public set sdcIp(value: string[]) {
    this._sdcIp = value;
  }
  public resetSdcIp() {
    this._sdcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcIpInput() {
    return this._sdcIp;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string[]; 
  public get systemId() {
    return cdktf.Fn.tolist(this.getListAttribute('system_id'));
  }
  public set systemId(value: string[]) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc powerflex_sdc}
*/
export class DataPowerflexSdc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_sdc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexSdc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexSdc to import
  * @param importFromId The id of the existing DataPowerflexSdc that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexSdc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_sdc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sdc powerflex_sdc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexSdcConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexSdcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_sdc',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sdcs - computed: true, optional: false, required: false
  private _sdcs = new DataPowerflexSdcSdcsList(this, "sdcs", false);
  public get sdcs() {
    return this._sdcs;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexSdcFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexSdcFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexSdcFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexSdcFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexSdcFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
