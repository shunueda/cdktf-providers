// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetrisDhcpOptionSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#description DataNetrisDhcpOptionSet#description}
  */
  readonly description?: string;
  /**
  * List of IP addresses of dns servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#dnsservers DataNetrisDhcpOptionSet#dnsservers}
  */
  readonly dnsservers?: string[];
  /**
  * The domain name that should be used as a suffix when resolving hostnames via the dns servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#domainsearch DataNetrisDhcpOptionSet#domainsearch}
  */
  readonly domainsearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#id DataNetrisDhcpOptionSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The amount of time in seconds a network device can use an IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#leasetime DataNetrisDhcpOptionSet#leasetime}
  */
  readonly leasetime?: number;
  /**
  * User assigned name of DHCP Option Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#name DataNetrisDhcpOptionSet#name}
  */
  readonly name: string;
  /**
  * List of IP addresses of ntp servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#ntpservers DataNetrisDhcpOptionSet#ntpservers}
  */
  readonly ntpservers?: string[];
  /**
  * customoption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#customoption DataNetrisDhcpOptionSet#customoption}
  */
  readonly customoption?: DataNetrisDhcpOptionSetCustomoption[] | cdktf.IResolvable;
  /**
  * standardtoption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#standardtoption DataNetrisDhcpOptionSet#standardtoption}
  */
  readonly standardtoption?: DataNetrisDhcpOptionSetStandardtoption[] | cdktf.IResolvable;
}
export interface DataNetrisDhcpOptionSetCustomoption {
  /**
  * Option code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#code DataNetrisDhcpOptionSet#code}
  */
  readonly code: number;
  /**
  * Value type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#type DataNetrisDhcpOptionSet#type}
  */
  readonly type: string;
  /**
  * Value of option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#value DataNetrisDhcpOptionSet#value}
  */
  readonly value: string;
}

export function dataNetrisDhcpOptionSetCustomoptionToTerraform(struct?: DataNetrisDhcpOptionSetCustomoption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNetrisDhcpOptionSetCustomoptionToHclTerraform(struct?: DataNetrisDhcpOptionSetCustomoption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataNetrisDhcpOptionSetCustomoptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetrisDhcpOptionSetCustomoption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetrisDhcpOptionSetCustomoption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class DataNetrisDhcpOptionSetCustomoptionList extends cdktf.ComplexList {
  public internalValue? : DataNetrisDhcpOptionSetCustomoption[] | cdktf.IResolvable

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
  public get(index: number): DataNetrisDhcpOptionSetCustomoptionOutputReference {
    return new DataNetrisDhcpOptionSetCustomoptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetrisDhcpOptionSetStandardtoption {
  /**
  * Option code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#code DataNetrisDhcpOptionSet#code}
  */
  readonly code: number;
  /**
  * Value of option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#value DataNetrisDhcpOptionSet#value}
  */
  readonly value: string;
}

export function dataNetrisDhcpOptionSetStandardtoptionToTerraform(struct?: DataNetrisDhcpOptionSetStandardtoption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNetrisDhcpOptionSetStandardtoptionToHclTerraform(struct?: DataNetrisDhcpOptionSetStandardtoption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
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

export class DataNetrisDhcpOptionSetStandardtoptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetrisDhcpOptionSetStandardtoption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetrisDhcpOptionSetStandardtoption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

export class DataNetrisDhcpOptionSetStandardtoptionList extends cdktf.ComplexList {
  public internalValue? : DataNetrisDhcpOptionSetStandardtoption[] | cdktf.IResolvable

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
  public get(index: number): DataNetrisDhcpOptionSetStandardtoptionOutputReference {
    return new DataNetrisDhcpOptionSetStandardtoptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set netris_dhcp_option_set}
*/
export class DataNetrisDhcpOptionSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_dhcp_option_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetrisDhcpOptionSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetrisDhcpOptionSet to import
  * @param importFromId The id of the existing DataNetrisDhcpOptionSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetrisDhcpOptionSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_dhcp_option_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/dhcp_option_set netris_dhcp_option_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetrisDhcpOptionSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetrisDhcpOptionSetConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_dhcp_option_set',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dnsservers = config.dnsservers;
    this._domainsearch = config.domainsearch;
    this._id = config.id;
    this._leasetime = config.leasetime;
    this._name = config.name;
    this._ntpservers = config.ntpservers;
    this._customoption.internalValue = config.customoption;
    this._standardtoption.internalValue = config.standardtoption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dnsservers - computed: false, optional: true, required: false
  private _dnsservers?: string[]; 
  public get dnsservers() {
    return cdktf.Fn.tolist(this.getListAttribute('dnsservers'));
  }
  public set dnsservers(value: string[]) {
    this._dnsservers = value;
  }
  public resetDnsservers() {
    this._dnsservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsserversInput() {
    return this._dnsservers;
  }

  // domainsearch - computed: false, optional: true, required: false
  private _domainsearch?: string; 
  public get domainsearch() {
    return this.getStringAttribute('domainsearch');
  }
  public set domainsearch(value: string) {
    this._domainsearch = value;
  }
  public resetDomainsearch() {
    this._domainsearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsearchInput() {
    return this._domainsearch;
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

  // leasetime - computed: false, optional: true, required: false
  private _leasetime?: number; 
  public get leasetime() {
    return this.getNumberAttribute('leasetime');
  }
  public set leasetime(value: number) {
    this._leasetime = value;
  }
  public resetLeasetime() {
    this._leasetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasetimeInput() {
    return this._leasetime;
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

  // ntpservers - computed: false, optional: true, required: false
  private _ntpservers?: string[]; 
  public get ntpservers() {
    return cdktf.Fn.tolist(this.getListAttribute('ntpservers'));
  }
  public set ntpservers(value: string[]) {
    this._ntpservers = value;
  }
  public resetNtpservers() {
    this._ntpservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpserversInput() {
    return this._ntpservers;
  }

  // customoption - computed: false, optional: true, required: false
  private _customoption = new DataNetrisDhcpOptionSetCustomoptionList(this, "customoption", true);
  public get customoption() {
    return this._customoption;
  }
  public putCustomoption(value: DataNetrisDhcpOptionSetCustomoption[] | cdktf.IResolvable) {
    this._customoption.internalValue = value;
  }
  public resetCustomoption() {
    this._customoption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customoptionInput() {
    return this._customoption.internalValue;
  }

  // standardtoption - computed: false, optional: true, required: false
  private _standardtoption = new DataNetrisDhcpOptionSetStandardtoptionList(this, "standardtoption", true);
  public get standardtoption() {
    return this._standardtoption;
  }
  public putStandardtoption(value: DataNetrisDhcpOptionSetStandardtoption[] | cdktf.IResolvable) {
    this._standardtoption.internalValue = value;
  }
  public resetStandardtoption() {
    this._standardtoption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardtoptionInput() {
    return this._standardtoption.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dnsservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsservers),
      domainsearch: cdktf.stringToTerraform(this._domainsearch),
      id: cdktf.stringToTerraform(this._id),
      leasetime: cdktf.numberToTerraform(this._leasetime),
      name: cdktf.stringToTerraform(this._name),
      ntpservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpservers),
      customoption: cdktf.listMapper(dataNetrisDhcpOptionSetCustomoptionToTerraform, true)(this._customoption.internalValue),
      standardtoption: cdktf.listMapper(dataNetrisDhcpOptionSetStandardtoptionToTerraform, true)(this._standardtoption.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsservers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domainsearch: {
        value: cdktf.stringToHclTerraform(this._domainsearch),
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
      leasetime: {
        value: cdktf.numberToHclTerraform(this._leasetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntpservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpservers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      customoption: {
        value: cdktf.listMapperHcl(dataNetrisDhcpOptionSetCustomoptionToHclTerraform, true)(this._customoption.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetrisDhcpOptionSetCustomoptionList",
      },
      standardtoption: {
        value: cdktf.listMapperHcl(dataNetrisDhcpOptionSetStandardtoptionToHclTerraform, true)(this._standardtoption.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetrisDhcpOptionSetStandardtoptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
