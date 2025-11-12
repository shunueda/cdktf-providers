// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#id Slbpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#owner_name Slbpool#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#pool_description Slbpool#pool_description}
  */
  readonly poolDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#record_type Slbpool#record_type}
  */
  readonly recordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#region_failure_sensitivity Slbpool#region_failure_sensitivity}
  */
  readonly regionFailureSensitivity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#response_method Slbpool#response_method}
  */
  readonly responseMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#serving_preference Slbpool#serving_preference}
  */
  readonly servingPreference: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#ttl Slbpool#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#zone_name Slbpool#zone_name}
  */
  readonly zoneName: string;
  /**
  * all_fail_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#all_fail_record Slbpool#all_fail_record}
  */
  readonly allFailRecord: SlbpoolAllFailRecord;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#monitor Slbpool#monitor}
  */
  readonly monitor: SlbpoolMonitor;
  /**
  * rdata_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#rdata_info Slbpool#rdata_info}
  */
  readonly rdataInfo: SlbpoolRdataInfo[] | cdktf.IResolvable;
}
export interface SlbpoolAllFailRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#description Slbpool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#rdata Slbpool#rdata}
  */
  readonly rdata: string;
}

export function slbpoolAllFailRecordToTerraform(struct?: SlbpoolAllFailRecordOutputReference | SlbpoolAllFailRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    rdata: cdktf.stringToTerraform(struct!.rdata),
  }
}


export function slbpoolAllFailRecordToHclTerraform(struct?: SlbpoolAllFailRecordOutputReference | SlbpoolAllFailRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbpoolAllFailRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbpoolAllFailRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbpoolAllFailRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._rdata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._rdata = value.rdata;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // serving - computed: true, optional: false, required: false
  public get serving() {
    return this.getBooleanAttribute('serving');
  }
}
export interface SlbpoolMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#method Slbpool#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#search_string Slbpool#search_string}
  */
  readonly searchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#transmitted_data Slbpool#transmitted_data}
  */
  readonly transmittedData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#url Slbpool#url}
  */
  readonly url: string;
}

export function slbpoolMonitorToTerraform(struct?: SlbpoolMonitorOutputReference | SlbpoolMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    transmitted_data: cdktf.stringToTerraform(struct!.transmittedData),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function slbpoolMonitorToHclTerraform(struct?: SlbpoolMonitorOutputReference | SlbpoolMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_string: {
      value: cdktf.stringToHclTerraform(struct!.searchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmitted_data: {
      value: cdktf.stringToHclTerraform(struct!.transmittedData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbpoolMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbpoolMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._searchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchString = this._searchString;
    }
    if (this._transmittedData !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmittedData = this._transmittedData;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbpoolMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._searchString = undefined;
      this._transmittedData = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._searchString = value.searchString;
      this._transmittedData = value.transmittedData;
      this._url = value.url;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // search_string - computed: false, optional: true, required: false
  private _searchString?: string; 
  public get searchString() {
    return this.getStringAttribute('search_string');
  }
  public set searchString(value: string) {
    this._searchString = value;
  }
  public resetSearchString() {
    this._searchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString;
  }

  // transmitted_data - computed: false, optional: true, required: false
  private _transmittedData?: string; 
  public get transmittedData() {
    return this.getStringAttribute('transmitted_data');
  }
  public set transmittedData(value: string) {
    this._transmittedData = value;
  }
  public resetTransmittedData() {
    this._transmittedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmittedDataInput() {
    return this._transmittedData;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SlbpoolRdataInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#description Slbpool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#forced_state Slbpool#forced_state}
  */
  readonly forcedState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#probing_enabled Slbpool#probing_enabled}
  */
  readonly probingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#rdata Slbpool#rdata}
  */
  readonly rdata: string;
}

export function slbpoolRdataInfoToTerraform(struct?: SlbpoolRdataInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    forced_state: cdktf.stringToTerraform(struct!.forcedState),
    probing_enabled: cdktf.booleanToTerraform(struct!.probingEnabled),
    rdata: cdktf.stringToTerraform(struct!.rdata),
  }
}


export function slbpoolRdataInfoToHclTerraform(struct?: SlbpoolRdataInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forced_state: {
      value: cdktf.stringToHclTerraform(struct!.forcedState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.probingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbpoolRdataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbpoolRdataInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._forcedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcedState = this._forcedState;
    }
    if (this._probingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.probingEnabled = this._probingEnabled;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbpoolRdataInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._forcedState = undefined;
      this._probingEnabled = undefined;
      this._rdata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._forcedState = value.forcedState;
      this._probingEnabled = value.probingEnabled;
      this._rdata = value.rdata;
    }
  }

  // available_to_serve - computed: true, optional: false, required: false
  public get availableToServe() {
    return this.getBooleanAttribute('available_to_serve');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // forced_state - computed: false, optional: true, required: false
  private _forcedState?: string; 
  public get forcedState() {
    return this.getStringAttribute('forced_state');
  }
  public set forcedState(value: string) {
    this._forcedState = value;
  }
  public resetForcedState() {
    this._forcedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedStateInput() {
    return this._forcedState;
  }

  // probing_enabled - computed: false, optional: true, required: false
  private _probingEnabled?: boolean | cdktf.IResolvable; 
  public get probingEnabled() {
    return this.getBooleanAttribute('probing_enabled');
  }
  public set probingEnabled(value: boolean | cdktf.IResolvable) {
    this._probingEnabled = value;
  }
  public resetProbingEnabled() {
    this._probingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probingEnabledInput() {
    return this._probingEnabled;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }
}

export class SlbpoolRdataInfoList extends cdktf.ComplexList {
  public internalValue? : SlbpoolRdataInfo[] | cdktf.IResolvable

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
  public get(index: number): SlbpoolRdataInfoOutputReference {
    return new SlbpoolRdataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool ultradns_slbpool}
*/
export class Slbpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_slbpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Slbpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Slbpool to import
  * @param importFromId The id of the existing Slbpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Slbpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_slbpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/slbpool ultradns_slbpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbpoolConfig
  */
  public constructor(scope: Construct, id: string, config: SlbpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_slbpool',
      terraformGeneratorMetadata: {
        providerName: 'ultradns',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
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
    this._ownerName = config.ownerName;
    this._poolDescription = config.poolDescription;
    this._recordType = config.recordType;
    this._regionFailureSensitivity = config.regionFailureSensitivity;
    this._responseMethod = config.responseMethod;
    this._servingPreference = config.servingPreference;
    this._ttl = config.ttl;
    this._zoneName = config.zoneName;
    this._allFailRecord.internalValue = config.allFailRecord;
    this._monitor.internalValue = config.monitor;
    this._rdataInfo.internalValue = config.rdataInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // pool_description - computed: false, optional: true, required: false
  private _poolDescription?: string; 
  public get poolDescription() {
    return this.getStringAttribute('pool_description');
  }
  public set poolDescription(value: string) {
    this._poolDescription = value;
  }
  public resetPoolDescription() {
    this._poolDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDescriptionInput() {
    return this._poolDescription;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // region_failure_sensitivity - computed: false, optional: false, required: true
  private _regionFailureSensitivity?: string; 
  public get regionFailureSensitivity() {
    return this.getStringAttribute('region_failure_sensitivity');
  }
  public set regionFailureSensitivity(value: string) {
    this._regionFailureSensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionFailureSensitivityInput() {
    return this._regionFailureSensitivity;
  }

  // response_method - computed: false, optional: false, required: true
  private _responseMethod?: string; 
  public get responseMethod() {
    return this.getStringAttribute('response_method');
  }
  public set responseMethod(value: string) {
    this._responseMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMethodInput() {
    return this._responseMethod;
  }

  // serving_preference - computed: false, optional: false, required: true
  private _servingPreference?: string; 
  public get servingPreference() {
    return this.getStringAttribute('serving_preference');
  }
  public set servingPreference(value: string) {
    this._servingPreference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servingPreferenceInput() {
    return this._servingPreference;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // all_fail_record - computed: false, optional: false, required: true
  private _allFailRecord = new SlbpoolAllFailRecordOutputReference(this, "all_fail_record");
  public get allFailRecord() {
    return this._allFailRecord;
  }
  public putAllFailRecord(value: SlbpoolAllFailRecord) {
    this._allFailRecord.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allFailRecordInput() {
    return this._allFailRecord.internalValue;
  }

  // monitor - computed: false, optional: false, required: true
  private _monitor = new SlbpoolMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SlbpoolMonitor) {
    this._monitor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // rdata_info - computed: false, optional: false, required: true
  private _rdataInfo = new SlbpoolRdataInfoList(this, "rdata_info", true);
  public get rdataInfo() {
    return this._rdataInfo;
  }
  public putRdataInfo(value: SlbpoolRdataInfo[] | cdktf.IResolvable) {
    this._rdataInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInfoInput() {
    return this._rdataInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      pool_description: cdktf.stringToTerraform(this._poolDescription),
      record_type: cdktf.stringToTerraform(this._recordType),
      region_failure_sensitivity: cdktf.stringToTerraform(this._regionFailureSensitivity),
      response_method: cdktf.stringToTerraform(this._responseMethod),
      serving_preference: cdktf.stringToTerraform(this._servingPreference),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      all_fail_record: slbpoolAllFailRecordToTerraform(this._allFailRecord.internalValue),
      monitor: slbpoolMonitorToTerraform(this._monitor.internalValue),
      rdata_info: cdktf.listMapper(slbpoolRdataInfoToTerraform, true)(this._rdataInfo.internalValue),
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
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_description: {
        value: cdktf.stringToHclTerraform(this._poolDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_failure_sensitivity: {
        value: cdktf.stringToHclTerraform(this._regionFailureSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_method: {
        value: cdktf.stringToHclTerraform(this._responseMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serving_preference: {
        value: cdktf.stringToHclTerraform(this._servingPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_fail_record: {
        value: slbpoolAllFailRecordToHclTerraform(this._allFailRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbpoolAllFailRecordList",
      },
      monitor: {
        value: slbpoolMonitorToHclTerraform(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbpoolMonitorList",
      },
      rdata_info: {
        value: cdktf.listMapperHcl(slbpoolRdataInfoToHclTerraform, true)(this._rdataInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SlbpoolRdataInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
