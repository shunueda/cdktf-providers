// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConstellixTxtRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#domain_id DataConstellixTxtRecord#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#gtd_region DataConstellixTxtRecord#gtd_region}
  */
  readonly gtdRegion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#id DataConstellixTxtRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#name DataConstellixTxtRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#noanswer DataConstellixTxtRecord#noanswer}
  */
  readonly noanswer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#note DataConstellixTxtRecord#note}
  */
  readonly note?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#parent DataConstellixTxtRecord#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#parentid DataConstellixTxtRecord#parentid}
  */
  readonly parentid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#source DataConstellixTxtRecord#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#source_type DataConstellixTxtRecord#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#ttl DataConstellixTxtRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#type DataConstellixTxtRecord#type}
  */
  readonly type?: string;
  /**
  * roundrobin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#roundrobin DataConstellixTxtRecord#roundrobin}
  */
  readonly roundrobin?: DataConstellixTxtRecordRoundrobin[] | cdktf.IResolvable;
}
export interface DataConstellixTxtRecordRoundrobin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#disable_flag DataConstellixTxtRecord#disable_flag}
  */
  readonly disableFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#value DataConstellixTxtRecord#value}
  */
  readonly value: string;
}

export function dataConstellixTxtRecordRoundrobinToTerraform(struct?: DataConstellixTxtRecordRoundrobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_flag: cdktf.booleanToTerraform(struct!.disableFlag),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataConstellixTxtRecordRoundrobinToHclTerraform(struct?: DataConstellixTxtRecordRoundrobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_flag: {
      value: cdktf.booleanToHclTerraform(struct!.disableFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataConstellixTxtRecordRoundrobinOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConstellixTxtRecordRoundrobin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFlag = this._disableFlag;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConstellixTxtRecordRoundrobin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableFlag = undefined;
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
      this._value = value.value;
    }
  }

  // disable_flag - computed: true, optional: true, required: false
  private _disableFlag?: boolean | cdktf.IResolvable; 
  public get disableFlag() {
    return this.getBooleanAttribute('disable_flag');
  }
  public set disableFlag(value: boolean | cdktf.IResolvable) {
    this._disableFlag = value;
  }
  public resetDisableFlag() {
    this._disableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFlagInput() {
    return this._disableFlag;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataConstellixTxtRecordRoundrobinList extends cdktf.ComplexList {
  public internalValue? : DataConstellixTxtRecordRoundrobin[] | cdktf.IResolvable

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
  public get(index: number): DataConstellixTxtRecordRoundrobinOutputReference {
    return new DataConstellixTxtRecordRoundrobinOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record constellix_txt_record}
*/
export class DataConstellixTxtRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_txt_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConstellixTxtRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConstellixTxtRecord to import
  * @param importFromId The id of the existing DataConstellixTxtRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConstellixTxtRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_txt_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/txt_record constellix_txt_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConstellixTxtRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataConstellixTxtRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_txt_record',
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
    this._domainId = config.domainId;
    this._gtdRegion = config.gtdRegion;
    this._id = config.id;
    this._name = config.name;
    this._noanswer = config.noanswer;
    this._note = config.note;
    this._parent = config.parent;
    this._parentid = config.parentid;
    this._source = config.source;
    this._sourceType = config.sourceType;
    this._ttl = config.ttl;
    this._type = config.type;
    this._roundrobin.internalValue = config.roundrobin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // parentid - computed: true, optional: true, required: false
  private _parentid?: number; 
  public get parentid() {
    return this.getNumberAttribute('parentid');
  }
  public set parentid(value: number) {
    this._parentid = value;
  }
  public resetParentid() {
    this._parentid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentidInput() {
    return this._parentid;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // roundrobin - computed: false, optional: true, required: false
  private _roundrobin = new DataConstellixTxtRecordRoundrobinList(this, "roundrobin", true);
  public get roundrobin() {
    return this._roundrobin;
  }
  public putRoundrobin(value: DataConstellixTxtRecordRoundrobin[] | cdktf.IResolvable) {
    this._roundrobin.internalValue = value;
  }
  public resetRoundrobin() {
    this._roundrobin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundrobinInput() {
    return this._roundrobin.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      gtd_region: cdktf.numberToTerraform(this._gtdRegion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      noanswer: cdktf.booleanToTerraform(this._noanswer),
      note: cdktf.stringToTerraform(this._note),
      parent: cdktf.stringToTerraform(this._parent),
      parentid: cdktf.numberToTerraform(this._parentid),
      source: cdktf.stringToTerraform(this._source),
      source_type: cdktf.stringToTerraform(this._sourceType),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      roundrobin: cdktf.listMapper(dataConstellixTxtRecordRoundrobinToTerraform, true)(this._roundrobin.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parentid: {
        value: cdktf.numberToHclTerraform(this._parentid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      roundrobin: {
        value: cdktf.listMapperHcl(dataConstellixTxtRecordRoundrobinToHclTerraform, true)(this._roundrobin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataConstellixTxtRecordRoundrobinList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
