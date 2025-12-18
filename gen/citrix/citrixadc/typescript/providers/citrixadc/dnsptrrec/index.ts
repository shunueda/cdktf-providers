// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsptrrecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec#domain Dnsptrrec#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec#ecssubnet Dnsptrrec#ecssubnet}
  */
  readonly ecssubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec#id Dnsptrrec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec#nodeid Dnsptrrec#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec#reversedomain Dnsptrrec#reversedomain}
  */
  readonly reversedomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec#ttl Dnsptrrec#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec citrixadc_dnsptrrec}
*/
export class Dnsptrrec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnsptrrec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnsptrrec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnsptrrec to import
  * @param importFromId The id of the existing Dnsptrrec that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnsptrrec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnsptrrec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnsptrrec citrixadc_dnsptrrec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsptrrecConfig
  */
  public constructor(scope: Construct, id: string, config: DnsptrrecConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnsptrrec',
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
    this._domain = config.domain;
    this._ecssubnet = config.ecssubnet;
    this._id = config.id;
    this._nodeid = config.nodeid;
    this._reversedomain = config.reversedomain;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ecssubnet - computed: false, optional: true, required: false
  private _ecssubnet?: string; 
  public get ecssubnet() {
    return this.getStringAttribute('ecssubnet');
  }
  public set ecssubnet(value: string) {
    this._ecssubnet = value;
  }
  public resetEcssubnet() {
    this._ecssubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecssubnetInput() {
    return this._ecssubnet;
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

  // nodeid - computed: false, optional: true, required: false
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  public resetNodeid() {
    this._nodeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // reversedomain - computed: false, optional: false, required: true
  private _reversedomain?: string; 
  public get reversedomain() {
    return this.getStringAttribute('reversedomain');
  }
  public set reversedomain(value: string) {
    this._reversedomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reversedomainInput() {
    return this._reversedomain;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      ecssubnet: cdktf.stringToTerraform(this._ecssubnet),
      id: cdktf.stringToTerraform(this._id),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      reversedomain: cdktf.stringToTerraform(this._reversedomain),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecssubnet: {
        value: cdktf.stringToHclTerraform(this._ecssubnet),
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
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reversedomain: {
        value: cdktf.stringToHclTerraform(this._reversedomain),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
