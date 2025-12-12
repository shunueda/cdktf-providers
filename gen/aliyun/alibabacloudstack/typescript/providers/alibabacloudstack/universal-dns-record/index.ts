// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UniversalDnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#id UniversalDnsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#lba_strategy UniversalDnsRecord#lba_strategy}
  */
  readonly lbaStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#line_ids UniversalDnsRecord#line_ids}
  */
  readonly lineIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#name UniversalDnsRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#remark UniversalDnsRecord#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#ttl UniversalDnsRecord#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#type UniversalDnsRecord#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#zone_id UniversalDnsRecord#zone_id}
  */
  readonly zoneId: string;
  /**
  * rdatas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#rdatas UniversalDnsRecord#rdatas}
  */
  readonly rdatas: UniversalDnsRecordRdatas[] | cdktf.IResolvable;
}
export interface UniversalDnsRecordRdatas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#lba_weight UniversalDnsRecord#lba_weight}
  */
  readonly lbaWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#value UniversalDnsRecord#value}
  */
  readonly value: string;
}

export function universalDnsRecordRdatasToTerraform(struct?: UniversalDnsRecordRdatas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lba_weight: cdktf.numberToTerraform(struct!.lbaWeight),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function universalDnsRecordRdatasToHclTerraform(struct?: UniversalDnsRecordRdatas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lba_weight: {
      value: cdktf.numberToHclTerraform(struct!.lbaWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class UniversalDnsRecordRdatasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UniversalDnsRecordRdatas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lbaWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbaWeight = this._lbaWeight;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UniversalDnsRecordRdatas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lbaWeight = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lbaWeight = value.lbaWeight;
      this._value = value.value;
    }
  }

  // lba_weight - computed: false, optional: true, required: false
  private _lbaWeight?: number; 
  public get lbaWeight() {
    return this.getNumberAttribute('lba_weight');
  }
  public set lbaWeight(value: number) {
    this._lbaWeight = value;
  }
  public resetLbaWeight() {
    this._lbaWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaWeightInput() {
    return this._lbaWeight;
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

export class UniversalDnsRecordRdatasList extends cdktf.ComplexList {
  public internalValue? : UniversalDnsRecordRdatas[] | cdktf.IResolvable

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
  public get(index: number): UniversalDnsRecordRdatasOutputReference {
    return new UniversalDnsRecordRdatasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record alibabacloudstack_universal_dns_record}
*/
export class UniversalDnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_universal_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UniversalDnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UniversalDnsRecord to import
  * @param importFromId The id of the existing UniversalDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UniversalDnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_universal_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/universal_dns_record alibabacloudstack_universal_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UniversalDnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: UniversalDnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_universal_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._lbaStrategy = config.lbaStrategy;
    this._lineIds = config.lineIds;
    this._name = config.name;
    this._remark = config.remark;
    this._ttl = config.ttl;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._rdatas.internalValue = config.rdatas;
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

  // lba_strategy - computed: false, optional: false, required: true
  private _lbaStrategy?: string; 
  public get lbaStrategy() {
    return this.getStringAttribute('lba_strategy');
  }
  public set lbaStrategy(value: string) {
    this._lbaStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaStrategyInput() {
    return this._lbaStrategy;
  }

  // line_ids - computed: false, optional: false, required: true
  private _lineIds?: string[]; 
  public get lineIds() {
    return this.getListAttribute('line_ids');
  }
  public set lineIds(value: string[]) {
    this._lineIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineIdsInput() {
    return this._lineIds;
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

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // rdatas - computed: false, optional: false, required: true
  private _rdatas = new UniversalDnsRecordRdatasList(this, "rdatas", false);
  public get rdatas() {
    return this._rdatas;
  }
  public putRdatas(value: UniversalDnsRecordRdatas[] | cdktf.IResolvable) {
    this._rdatas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdatasInput() {
    return this._rdatas.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lba_strategy: cdktf.stringToTerraform(this._lbaStrategy),
      line_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lineIds),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      rdatas: cdktf.listMapper(universalDnsRecordRdatasToTerraform, true)(this._rdatas.internalValue),
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
      lba_strategy: {
        value: cdktf.stringToHclTerraform(this._lbaStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lineIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdatas: {
        value: cdktf.listMapperHcl(universalDnsRecordRdatasToHclTerraform, true)(this._rdatas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UniversalDnsRecordRdatasList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
