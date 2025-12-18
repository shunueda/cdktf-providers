// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RnatClearConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#id RnatClear#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#rnatsname RnatClear#rnatsname}
  */
  readonly rnatsname?: string;
  /**
  * rnat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#rnat RnatClear#rnat}
  */
  readonly rnat?: RnatClearRnat[] | cdktf.IResolvable;
}
export interface RnatClearRnat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#aclname RnatClear#aclname}
  */
  readonly aclname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#natip RnatClear#natip}
  */
  readonly natip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#natip2 RnatClear#natip2}
  */
  readonly natip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#netmask RnatClear#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#network RnatClear#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#redirectport RnatClear#redirectport}
  */
  readonly redirectport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#td RnatClear#td}
  */
  readonly td?: number;
}

export function rnatClearRnatToTerraform(struct?: RnatClearRnat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aclname: cdktf.stringToTerraform(struct!.aclname),
    natip: cdktf.stringToTerraform(struct!.natip),
    natip2: cdktf.stringToTerraform(struct!.natip2),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    network: cdktf.stringToTerraform(struct!.network),
    redirectport: cdktf.booleanToTerraform(struct!.redirectport),
    td: cdktf.numberToTerraform(struct!.td),
  }
}


export function rnatClearRnatToHclTerraform(struct?: RnatClearRnat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aclname: {
      value: cdktf.stringToHclTerraform(struct!.aclname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    natip: {
      value: cdktf.stringToHclTerraform(struct!.natip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    natip2: {
      value: cdktf.stringToHclTerraform(struct!.natip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirectport: {
      value: cdktf.booleanToHclTerraform(struct!.redirectport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    td: {
      value: cdktf.numberToHclTerraform(struct!.td),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RnatClearRnatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RnatClearRnat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclname !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclname = this._aclname;
    }
    if (this._natip !== undefined) {
      hasAnyValues = true;
      internalValueResult.natip = this._natip;
    }
    if (this._natip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.natip2 = this._natip2;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._redirectport !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectport = this._redirectport;
    }
    if (this._td !== undefined) {
      hasAnyValues = true;
      internalValueResult.td = this._td;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RnatClearRnat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclname = undefined;
      this._natip = undefined;
      this._natip2 = undefined;
      this._netmask = undefined;
      this._network = undefined;
      this._redirectport = undefined;
      this._td = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclname = value.aclname;
      this._natip = value.natip;
      this._natip2 = value.natip2;
      this._netmask = value.netmask;
      this._network = value.network;
      this._redirectport = value.redirectport;
      this._td = value.td;
    }
  }

  // aclname - computed: true, optional: true, required: false
  private _aclname?: string; 
  public get aclname() {
    return this.getStringAttribute('aclname');
  }
  public set aclname(value: string) {
    this._aclname = value;
  }
  public resetAclname() {
    this._aclname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclnameInput() {
    return this._aclname;
  }

  // natip - computed: true, optional: true, required: false
  private _natip?: string; 
  public get natip() {
    return this.getStringAttribute('natip');
  }
  public set natip(value: string) {
    this._natip = value;
  }
  public resetNatip() {
    this._natip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natipInput() {
    return this._natip;
  }

  // natip2 - computed: true, optional: true, required: false
  private _natip2?: string; 
  public get natip2() {
    return this.getStringAttribute('natip2');
  }
  public set natip2(value: string) {
    this._natip2 = value;
  }
  public resetNatip2() {
    this._natip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natip2Input() {
    return this._natip2;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // redirectport - computed: true, optional: true, required: false
  private _redirectport?: boolean | cdktf.IResolvable; 
  public get redirectport() {
    return this.getBooleanAttribute('redirectport');
  }
  public set redirectport(value: boolean | cdktf.IResolvable) {
    this._redirectport = value;
  }
  public resetRedirectport() {
    this._redirectport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectportInput() {
    return this._redirectport;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }
}

export class RnatClearRnatList extends cdktf.ComplexList {
  public internalValue? : RnatClearRnat[] | cdktf.IResolvable

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
  public get(index: number): RnatClearRnatOutputReference {
    return new RnatClearRnatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear citrixadc_rnat_clear}
*/
export class RnatClear extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rnat_clear";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RnatClear resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RnatClear to import
  * @param importFromId The id of the existing RnatClear that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RnatClear to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rnat_clear", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat_clear citrixadc_rnat_clear} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RnatClearConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RnatClearConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rnat_clear',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._rnatsname = config.rnatsname;
    this._rnat.internalValue = config.rnat;
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

  // rnatsname - computed: true, optional: true, required: false
  private _rnatsname?: string; 
  public get rnatsname() {
    return this.getStringAttribute('rnatsname');
  }
  public set rnatsname(value: string) {
    this._rnatsname = value;
  }
  public resetRnatsname() {
    this._rnatsname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnatsnameInput() {
    return this._rnatsname;
  }

  // rnat - computed: false, optional: true, required: false
  private _rnat = new RnatClearRnatList(this, "rnat", true);
  public get rnat() {
    return this._rnat;
  }
  public putRnat(value: RnatClearRnat[] | cdktf.IResolvable) {
    this._rnat.internalValue = value;
  }
  public resetRnat() {
    this._rnat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnatInput() {
    return this._rnat.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rnatsname: cdktf.stringToTerraform(this._rnatsname),
      rnat: cdktf.listMapper(rnatClearRnatToTerraform, true)(this._rnat.internalValue),
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
      rnatsname: {
        value: cdktf.stringToHclTerraform(this._rnatsname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rnat: {
        value: cdktf.listMapperHcl(rnatClearRnatToHclTerraform, true)(this._rnat.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RnatClearRnatList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
