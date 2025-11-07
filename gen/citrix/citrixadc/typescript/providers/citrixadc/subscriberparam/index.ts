// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriberparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam#id Subscriberparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam#idleaction Subscriberparam#idleaction}
  */
  readonly idleaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam#idlettl Subscriberparam#idlettl}
  */
  readonly idlettl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam#interfacetype Subscriberparam#interfacetype}
  */
  readonly interfacetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam#ipv6prefixlookuplist Subscriberparam#ipv6prefixlookuplist}
  */
  readonly ipv6Prefixlookuplist?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam#keytype Subscriberparam#keytype}
  */
  readonly keytype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam citrixadc_subscriberparam}
*/
export class Subscriberparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_subscriberparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subscriberparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subscriberparam to import
  * @param importFromId The id of the existing Subscriberparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subscriberparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_subscriberparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/subscriberparam citrixadc_subscriberparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriberparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SubscriberparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_subscriberparam',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._idleaction = config.idleaction;
    this._idlettl = config.idlettl;
    this._interfacetype = config.interfacetype;
    this._ipv6Prefixlookuplist = config.ipv6Prefixlookuplist;
    this._keytype = config.keytype;
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

  // idleaction - computed: true, optional: true, required: false
  private _idleaction?: string; 
  public get idleaction() {
    return this.getStringAttribute('idleaction');
  }
  public set idleaction(value: string) {
    this._idleaction = value;
  }
  public resetIdleaction() {
    this._idleaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleactionInput() {
    return this._idleaction;
  }

  // idlettl - computed: true, optional: true, required: false
  private _idlettl?: number; 
  public get idlettl() {
    return this.getNumberAttribute('idlettl');
  }
  public set idlettl(value: number) {
    this._idlettl = value;
  }
  public resetIdlettl() {
    this._idlettl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idlettlInput() {
    return this._idlettl;
  }

  // interfacetype - computed: true, optional: true, required: false
  private _interfacetype?: string; 
  public get interfacetype() {
    return this.getStringAttribute('interfacetype');
  }
  public set interfacetype(value: string) {
    this._interfacetype = value;
  }
  public resetInterfacetype() {
    this._interfacetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacetypeInput() {
    return this._interfacetype;
  }

  // ipv6prefixlookuplist - computed: true, optional: true, required: false
  private _ipv6Prefixlookuplist?: number[]; 
  public get ipv6Prefixlookuplist() {
    return this.getNumberListAttribute('ipv6prefixlookuplist');
  }
  public set ipv6Prefixlookuplist(value: number[]) {
    this._ipv6Prefixlookuplist = value;
  }
  public resetIpv6Prefixlookuplist() {
    this._ipv6Prefixlookuplist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixlookuplistInput() {
    return this._ipv6Prefixlookuplist;
  }

  // keytype - computed: true, optional: true, required: false
  private _keytype?: string; 
  public get keytype() {
    return this.getStringAttribute('keytype');
  }
  public set keytype(value: string) {
    this._keytype = value;
  }
  public resetKeytype() {
    this._keytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytypeInput() {
    return this._keytype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      idleaction: cdktf.stringToTerraform(this._idleaction),
      idlettl: cdktf.numberToTerraform(this._idlettl),
      interfacetype: cdktf.stringToTerraform(this._interfacetype),
      ipv6prefixlookuplist: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ipv6Prefixlookuplist),
      keytype: cdktf.stringToTerraform(this._keytype),
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
      idleaction: {
        value: cdktf.stringToHclTerraform(this._idleaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idlettl: {
        value: cdktf.numberToHclTerraform(this._idlettl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interfacetype: {
        value: cdktf.stringToHclTerraform(this._interfacetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6prefixlookuplist: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ipv6Prefixlookuplist),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      keytype: {
        value: cdktf.stringToHclTerraform(this._keytype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
