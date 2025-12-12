// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackDnsGtmAddresspoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#id ApsarastackDnsGtmAddresspool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#lba_strategy ApsarastackDnsGtmAddresspool#lba_strategy}
  */
  readonly lbaStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#name ApsarastackDnsGtmAddresspool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#type ApsarastackDnsGtmAddresspool#type}
  */
  readonly type: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#addrs ApsarastackDnsGtmAddresspool#addrs}
  */
  readonly addrs: ApsarastackDnsGtmAddresspoolAddrs[] | cdktf.IResolvable;
}
export interface ApsarastackDnsGtmAddresspoolAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#lba_weight ApsarastackDnsGtmAddresspool#lba_weight}
  */
  readonly lbaWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#mode ApsarastackDnsGtmAddresspool#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#value ApsarastackDnsGtmAddresspool#value}
  */
  readonly value: string;
}

export function apsarastackDnsGtmAddresspoolAddrsToTerraform(struct?: ApsarastackDnsGtmAddresspoolAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lba_weight: cdktf.numberToTerraform(struct!.lbaWeight),
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackDnsGtmAddresspoolAddrsToHclTerraform(struct?: ApsarastackDnsGtmAddresspoolAddrs | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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

export class ApsarastackDnsGtmAddresspoolAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackDnsGtmAddresspoolAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lbaWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbaWeight = this._lbaWeight;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackDnsGtmAddresspoolAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lbaWeight = undefined;
      this._mode = undefined;
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
      this._mode = value.mode;
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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

export class ApsarastackDnsGtmAddresspoolAddrsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackDnsGtmAddresspoolAddrs[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackDnsGtmAddresspoolAddrsOutputReference {
    return new ApsarastackDnsGtmAddresspoolAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool apsarastack_dns_gtm_addresspool}
*/
export class ApsarastackDnsGtmAddresspool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_dns_gtm_addresspool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackDnsGtmAddresspool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackDnsGtmAddresspool to import
  * @param importFromId The id of the existing ApsarastackDnsGtmAddresspool that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackDnsGtmAddresspool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_dns_gtm_addresspool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_gtm_addresspool apsarastack_dns_gtm_addresspool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackDnsGtmAddresspoolConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackDnsGtmAddresspoolConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_dns_gtm_addresspool',
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
    this._name = config.name;
    this._type = config.type;
    this._addrs.internalValue = config.addrs;
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

  // addrs - computed: false, optional: false, required: true
  private _addrs = new ApsarastackDnsGtmAddresspoolAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: ApsarastackDnsGtmAddresspoolAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lba_strategy: cdktf.stringToTerraform(this._lbaStrategy),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      addrs: cdktf.listMapper(apsarastackDnsGtmAddresspoolAddrsToTerraform, true)(this._addrs.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addrs: {
        value: cdktf.listMapperHcl(apsarastackDnsGtmAddresspoolAddrsToHclTerraform, true)(this._addrs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackDnsGtmAddresspoolAddrsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
