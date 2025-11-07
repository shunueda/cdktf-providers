// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciOspfInterfacePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#annotation DataAciOspfInterfacePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#cost DataAciOspfInterfacePolicy#cost}
  */
  readonly cost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#ctrl DataAciOspfInterfacePolicy#ctrl}
  */
  readonly ctrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#dead_intvl DataAciOspfInterfacePolicy#dead_intvl}
  */
  readonly deadIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#description DataAciOspfInterfacePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#hello_intvl DataAciOspfInterfacePolicy#hello_intvl}
  */
  readonly helloIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#id DataAciOspfInterfacePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#name DataAciOspfInterfacePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#name_alias DataAciOspfInterfacePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#nw_t DataAciOspfInterfacePolicy#nw_t}
  */
  readonly nwT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#pfx_suppress DataAciOspfInterfacePolicy#pfx_suppress}
  */
  readonly pfxSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#prio DataAciOspfInterfacePolicy#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#rexmit_intvl DataAciOspfInterfacePolicy#rexmit_intvl}
  */
  readonly rexmitIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#tenant_dn DataAciOspfInterfacePolicy#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#xmit_delay DataAciOspfInterfacePolicy#xmit_delay}
  */
  readonly xmitDelay?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy aci_ospf_interface_policy}
*/
export class DataAciOspfInterfacePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_ospf_interface_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciOspfInterfacePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciOspfInterfacePolicy to import
  * @param importFromId The id of the existing DataAciOspfInterfacePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciOspfInterfacePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_ospf_interface_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_interface_policy aci_ospf_interface_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciOspfInterfacePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciOspfInterfacePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_ospf_interface_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._cost = config.cost;
    this._ctrl = config.ctrl;
    this._deadIntvl = config.deadIntvl;
    this._description = config.description;
    this._helloIntvl = config.helloIntvl;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._nwT = config.nwT;
    this._pfxSuppress = config.pfxSuppress;
    this._prio = config.prio;
    this._rexmitIntvl = config.rexmitIntvl;
    this._tenantDn = config.tenantDn;
    this._xmitDelay = config.xmitDelay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: string; 
  public get cost() {
    return this.getStringAttribute('cost');
  }
  public set cost(value: string) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // ctrl - computed: true, optional: true, required: false
  private _ctrl?: string[]; 
  public get ctrl() {
    return this.getListAttribute('ctrl');
  }
  public set ctrl(value: string[]) {
    this._ctrl = value;
  }
  public resetCtrl() {
    this._ctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlInput() {
    return this._ctrl;
  }

  // dead_intvl - computed: true, optional: true, required: false
  private _deadIntvl?: string; 
  public get deadIntvl() {
    return this.getStringAttribute('dead_intvl');
  }
  public set deadIntvl(value: string) {
    this._deadIntvl = value;
  }
  public resetDeadIntvl() {
    this._deadIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntvlInput() {
    return this._deadIntvl;
  }

  // description - computed: true, optional: true, required: false
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

  // hello_intvl - computed: true, optional: true, required: false
  private _helloIntvl?: string; 
  public get helloIntvl() {
    return this.getStringAttribute('hello_intvl');
  }
  public set helloIntvl(value: string) {
    this._helloIntvl = value;
  }
  public resetHelloIntvl() {
    this._helloIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntvlInput() {
    return this._helloIntvl;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // nw_t - computed: true, optional: true, required: false
  private _nwT?: string; 
  public get nwT() {
    return this.getStringAttribute('nw_t');
  }
  public set nwT(value: string) {
    this._nwT = value;
  }
  public resetNwT() {
    this._nwT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwTInput() {
    return this._nwT;
  }

  // pfx_suppress - computed: true, optional: true, required: false
  private _pfxSuppress?: string; 
  public get pfxSuppress() {
    return this.getStringAttribute('pfx_suppress');
  }
  public set pfxSuppress(value: string) {
    this._pfxSuppress = value;
  }
  public resetPfxSuppress() {
    this._pfxSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxSuppressInput() {
    return this._pfxSuppress;
  }

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
  }

  // rexmit_intvl - computed: true, optional: true, required: false
  private _rexmitIntvl?: string; 
  public get rexmitIntvl() {
    return this.getStringAttribute('rexmit_intvl');
  }
  public set rexmitIntvl(value: string) {
    this._rexmitIntvl = value;
  }
  public resetRexmitIntvl() {
    this._rexmitIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rexmitIntvlInput() {
    return this._rexmitIntvl;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // xmit_delay - computed: true, optional: true, required: false
  private _xmitDelay?: string; 
  public get xmitDelay() {
    return this.getStringAttribute('xmit_delay');
  }
  public set xmitDelay(value: string) {
    this._xmitDelay = value;
  }
  public resetXmitDelay() {
    this._xmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmitDelayInput() {
    return this._xmitDelay;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      cost: cdktf.stringToTerraform(this._cost),
      ctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ctrl),
      dead_intvl: cdktf.stringToTerraform(this._deadIntvl),
      description: cdktf.stringToTerraform(this._description),
      hello_intvl: cdktf.stringToTerraform(this._helloIntvl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      nw_t: cdktf.stringToTerraform(this._nwT),
      pfx_suppress: cdktf.stringToTerraform(this._pfxSuppress),
      prio: cdktf.stringToTerraform(this._prio),
      rexmit_intvl: cdktf.stringToTerraform(this._rexmitIntvl),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      xmit_delay: cdktf.stringToTerraform(this._xmitDelay),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.stringToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ctrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dead_intvl: {
        value: cdktf.stringToHclTerraform(this._deadIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_intvl: {
        value: cdktf.stringToHclTerraform(this._helloIntvl),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nw_t: {
        value: cdktf.stringToHclTerraform(this._nwT),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pfx_suppress: {
        value: cdktf.stringToHclTerraform(this._pfxSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prio: {
        value: cdktf.stringToHclTerraform(this._prio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rexmit_intvl: {
        value: cdktf.stringToHclTerraform(this._rexmitIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmit_delay: {
        value: cdktf.stringToHclTerraform(this._xmitDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
