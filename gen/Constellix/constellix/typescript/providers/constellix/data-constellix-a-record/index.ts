// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConstellixARecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#contact_ids DataConstellixARecord#contact_ids}
  */
  readonly contactIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#domain_id DataConstellixARecord#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#geo_location DataConstellixARecord#geo_location}
  */
  readonly geoLocation?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#gtd_region DataConstellixARecord#gtd_region}
  */
  readonly gtdRegion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#id DataConstellixARecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#name DataConstellixARecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#noanswer DataConstellixARecord#noanswer}
  */
  readonly noanswer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#note DataConstellixARecord#note}
  */
  readonly note?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#pools DataConstellixARecord#pools}
  */
  readonly pools?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#record_failover_disable_flag DataConstellixARecord#record_failover_disable_flag}
  */
  readonly recordFailoverDisableFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#record_failover_failover_type DataConstellixARecord#record_failover_failover_type}
  */
  readonly recordFailoverFailoverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#record_option DataConstellixARecord#record_option}
  */
  readonly recordOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#roundrobin DataConstellixARecord#roundrobin}
  */
  readonly roundrobin?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#source_type DataConstellixARecord#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#ttl DataConstellixARecord#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#type DataConstellixARecord#type}
  */
  readonly type?: string;
  /**
  * record_failover_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#record_failover_values DataConstellixARecord#record_failover_values}
  */
  readonly recordFailoverValues?: DataConstellixARecordRecordFailoverValues[] | cdktf.IResolvable;
  /**
  * roundrobin_failover block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#roundrobin_failover DataConstellixARecord#roundrobin_failover}
  */
  readonly roundrobinFailover?: DataConstellixARecordRoundrobinFailover[] | cdktf.IResolvable;
}
export interface DataConstellixARecordRecordFailoverValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#checkidrcdf DataConstellixARecord#checkidrcdf}
  */
  readonly checkidrcdf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#disable_flag DataConstellixARecord#disable_flag}
  */
  readonly disableFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#sort_order DataConstellixARecord#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#value DataConstellixARecord#value}
  */
  readonly value?: string;
}

export function dataConstellixARecordRecordFailoverValuesToTerraform(struct?: DataConstellixARecordRecordFailoverValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkidrcdf: cdktf.numberToTerraform(struct!.checkidrcdf),
    disable_flag: cdktf.stringToTerraform(struct!.disableFlag),
    sort_order: cdktf.stringToTerraform(struct!.sortOrder),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataConstellixARecordRecordFailoverValuesToHclTerraform(struct?: DataConstellixARecordRecordFailoverValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkidrcdf: {
      value: cdktf.numberToHclTerraform(struct!.checkidrcdf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_flag: {
      value: cdktf.stringToHclTerraform(struct!.disableFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktf.stringToHclTerraform(struct!.sortOrder),
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

export class DataConstellixARecordRecordFailoverValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConstellixARecordRecordFailoverValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkidrcdf !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkidrcdf = this._checkidrcdf;
    }
    if (this._disableFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFlag = this._disableFlag;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConstellixARecordRecordFailoverValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkidrcdf = undefined;
      this._disableFlag = undefined;
      this._sortOrder = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkidrcdf = value.checkidrcdf;
      this._disableFlag = value.disableFlag;
      this._sortOrder = value.sortOrder;
      this._value = value.value;
    }
  }

  // checkidrcdf - computed: true, optional: true, required: false
  private _checkidrcdf?: number; 
  public get checkidrcdf() {
    return this.getNumberAttribute('checkidrcdf');
  }
  public set checkidrcdf(value: number) {
    this._checkidrcdf = value;
  }
  public resetCheckidrcdf() {
    this._checkidrcdf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkidrcdfInput() {
    return this._checkidrcdf;
  }

  // disable_flag - computed: true, optional: true, required: false
  private _disableFlag?: string; 
  public get disableFlag() {
    return this.getStringAttribute('disable_flag');
  }
  public set disableFlag(value: string) {
    this._disableFlag = value;
  }
  public resetDisableFlag() {
    this._disableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFlagInput() {
    return this._disableFlag;
  }

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // value - computed: true, optional: true, required: false
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

export class DataConstellixARecordRecordFailoverValuesList extends cdktf.ComplexList {
  public internalValue? : DataConstellixARecordRecordFailoverValues[] | cdktf.IResolvable

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
  public get(index: number): DataConstellixARecordRecordFailoverValuesOutputReference {
    return new DataConstellixARecordRecordFailoverValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConstellixARecordRoundrobinFailover {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#disable_flag DataConstellixARecord#disable_flag}
  */
  readonly disableFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#sort_order DataConstellixARecord#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#value DataConstellixARecord#value}
  */
  readonly value?: string;
}

export function dataConstellixARecordRoundrobinFailoverToTerraform(struct?: DataConstellixARecordRoundrobinFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_flag: cdktf.stringToTerraform(struct!.disableFlag),
    sort_order: cdktf.stringToTerraform(struct!.sortOrder),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataConstellixARecordRoundrobinFailoverToHclTerraform(struct?: DataConstellixARecordRoundrobinFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_flag: {
      value: cdktf.stringToHclTerraform(struct!.disableFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktf.stringToHclTerraform(struct!.sortOrder),
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

export class DataConstellixARecordRoundrobinFailoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConstellixARecordRoundrobinFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFlag = this._disableFlag;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConstellixARecordRoundrobinFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableFlag = undefined;
      this._sortOrder = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableFlag = value.disableFlag;
      this._sortOrder = value.sortOrder;
      this._value = value.value;
    }
  }

  // disable_flag - computed: true, optional: true, required: false
  private _disableFlag?: string; 
  public get disableFlag() {
    return this.getStringAttribute('disable_flag');
  }
  public set disableFlag(value: string) {
    this._disableFlag = value;
  }
  public resetDisableFlag() {
    this._disableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFlagInput() {
    return this._disableFlag;
  }

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // value - computed: true, optional: true, required: false
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

export class DataConstellixARecordRoundrobinFailoverList extends cdktf.ComplexList {
  public internalValue? : DataConstellixARecordRoundrobinFailover[] | cdktf.IResolvable

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
  public get(index: number): DataConstellixARecordRoundrobinFailoverOutputReference {
    return new DataConstellixARecordRoundrobinFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record constellix_a_record}
*/
export class DataConstellixARecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_a_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConstellixARecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConstellixARecord to import
  * @param importFromId The id of the existing DataConstellixARecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConstellixARecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_a_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/a_record constellix_a_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConstellixARecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataConstellixARecordConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_a_record',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactIds = config.contactIds;
    this._domainId = config.domainId;
    this._geoLocation = config.geoLocation;
    this._gtdRegion = config.gtdRegion;
    this._id = config.id;
    this._name = config.name;
    this._noanswer = config.noanswer;
    this._note = config.note;
    this._pools = config.pools;
    this._recordFailoverDisableFlag = config.recordFailoverDisableFlag;
    this._recordFailoverFailoverType = config.recordFailoverFailoverType;
    this._recordOption = config.recordOption;
    this._roundrobin = config.roundrobin;
    this._sourceType = config.sourceType;
    this._ttl = config.ttl;
    this._type = config.type;
    this._recordFailoverValues.internalValue = config.recordFailoverValues;
    this._roundrobinFailover.internalValue = config.roundrobinFailover;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_ids - computed: true, optional: true, required: false
  private _contactIds?: number[]; 
  public get contactIds() {
    return this.getNumberListAttribute('contact_ids');
  }
  public set contactIds(value: number[]) {
    this._contactIds = value;
  }
  public resetContactIds() {
    this._contactIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdsInput() {
    return this._contactIds;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // geo_location - computed: true, optional: true, required: false
  private _geoLocation?: { [key: string]: string }; 
  public get geoLocation() {
    return this.getStringMapAttribute('geo_location');
  }
  public set geoLocation(value: { [key: string]: string }) {
    this._geoLocation = value;
  }
  public resetGeoLocation() {
    this._geoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation;
  }

  // gtd_region - computed: true, optional: true, required: false
  private _gtdRegion?: number; 
  public get gtdRegion() {
    return this.getNumberAttribute('gtd_region');
  }
  public set gtdRegion(value: number) {
    this._gtdRegion = value;
  }
  public resetGtdRegion() {
    this._gtdRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtdRegionInput() {
    return this._gtdRegion;
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

  // noanswer - computed: true, optional: true, required: false
  private _noanswer?: boolean | cdktf.IResolvable; 
  public get noanswer() {
    return this.getBooleanAttribute('noanswer');
  }
  public set noanswer(value: boolean | cdktf.IResolvable) {
    this._noanswer = value;
  }
  public resetNoanswer() {
    this._noanswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noanswerInput() {
    return this._noanswer;
  }

  // note - computed: true, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // pools - computed: true, optional: true, required: false
  private _pools?: number[]; 
  public get pools() {
    return this.getNumberListAttribute('pools');
  }
  public set pools(value: number[]) {
    this._pools = value;
  }
  public resetPools() {
    this._pools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools;
  }

  // record_failover_disable_flag - computed: true, optional: true, required: false
  private _recordFailoverDisableFlag?: string; 
  public get recordFailoverDisableFlag() {
    return this.getStringAttribute('record_failover_disable_flag');
  }
  public set recordFailoverDisableFlag(value: string) {
    this._recordFailoverDisableFlag = value;
  }
  public resetRecordFailoverDisableFlag() {
    this._recordFailoverDisableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFailoverDisableFlagInput() {
    return this._recordFailoverDisableFlag;
  }

  // record_failover_failover_type - computed: true, optional: true, required: false
  private _recordFailoverFailoverType?: string; 
  public get recordFailoverFailoverType() {
    return this.getStringAttribute('record_failover_failover_type');
  }
  public set recordFailoverFailoverType(value: string) {
    this._recordFailoverFailoverType = value;
  }
  public resetRecordFailoverFailoverType() {
    this._recordFailoverFailoverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFailoverFailoverTypeInput() {
    return this._recordFailoverFailoverType;
  }

  // record_option - computed: true, optional: true, required: false
  private _recordOption?: string; 
  public get recordOption() {
    return this.getStringAttribute('record_option');
  }
  public set recordOption(value: string) {
    this._recordOption = value;
  }
  public resetRecordOption() {
    this._recordOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordOptionInput() {
    return this._recordOption;
  }

  // roundrobin - computed: true, optional: true, required: false
  private _roundrobin?: { [key: string]: string }; 
  public get roundrobin() {
    return this.getStringMapAttribute('roundrobin');
  }
  public set roundrobin(value: { [key: string]: string }) {
    this._roundrobin = value;
  }
  public resetRoundrobin() {
    this._roundrobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundrobinInput() {
    return this._roundrobin;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // ttl - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // record_failover_values - computed: false, optional: true, required: false
  private _recordFailoverValues = new DataConstellixARecordRecordFailoverValuesList(this, "record_failover_values", true);
  public get recordFailoverValues() {
    return this._recordFailoverValues;
  }
  public putRecordFailoverValues(value: DataConstellixARecordRecordFailoverValues[] | cdktf.IResolvable) {
    this._recordFailoverValues.internalValue = value;
  }
  public resetRecordFailoverValues() {
    this._recordFailoverValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFailoverValuesInput() {
    return this._recordFailoverValues.internalValue;
  }

  // roundrobin_failover - computed: false, optional: true, required: false
  private _roundrobinFailover = new DataConstellixARecordRoundrobinFailoverList(this, "roundrobin_failover", false);
  public get roundrobinFailover() {
    return this._roundrobinFailover;
  }
  public putRoundrobinFailover(value: DataConstellixARecordRoundrobinFailover[] | cdktf.IResolvable) {
    this._roundrobinFailover.internalValue = value;
  }
  public resetRoundrobinFailover() {
    this._roundrobinFailover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundrobinFailoverInput() {
    return this._roundrobinFailover.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._contactIds),
      domain_id: cdktf.stringToTerraform(this._domainId),
      geo_location: cdktf.hashMapper(cdktf.stringToTerraform)(this._geoLocation),
      gtd_region: cdktf.numberToTerraform(this._gtdRegion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      noanswer: cdktf.booleanToTerraform(this._noanswer),
      note: cdktf.stringToTerraform(this._note),
      pools: cdktf.listMapper(cdktf.numberToTerraform, false)(this._pools),
      record_failover_disable_flag: cdktf.stringToTerraform(this._recordFailoverDisableFlag),
      record_failover_failover_type: cdktf.stringToTerraform(this._recordFailoverFailoverType),
      record_option: cdktf.stringToTerraform(this._recordOption),
      roundrobin: cdktf.hashMapper(cdktf.stringToTerraform)(this._roundrobin),
      source_type: cdktf.stringToTerraform(this._sourceType),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      record_failover_values: cdktf.listMapper(dataConstellixARecordRecordFailoverValuesToTerraform, true)(this._recordFailoverValues.internalValue),
      roundrobin_failover: cdktf.listMapper(dataConstellixARecordRoundrobinFailoverToTerraform, true)(this._roundrobinFailover.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._contactIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_location: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._geoLocation),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gtd_region: {
        value: cdktf.numberToHclTerraform(this._gtdRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      noanswer: {
        value: cdktf.booleanToHclTerraform(this._noanswer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pools: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._pools),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      record_failover_disable_flag: {
        value: cdktf.stringToHclTerraform(this._recordFailoverDisableFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_failover_failover_type: {
        value: cdktf.stringToHclTerraform(this._recordFailoverFailoverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_option: {
        value: cdktf.stringToHclTerraform(this._recordOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roundrobin: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._roundrobin),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_failover_values: {
        value: cdktf.listMapperHcl(dataConstellixARecordRecordFailoverValuesToHclTerraform, true)(this._recordFailoverValues.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataConstellixARecordRecordFailoverValuesList",
      },
      roundrobin_failover: {
        value: cdktf.listMapperHcl(dataConstellixARecordRoundrobinFailoverToHclTerraform, true)(this._roundrobinFailover.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConstellixARecordRoundrobinFailoverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
