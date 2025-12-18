// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnscnamerecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec#aliasname Dnscnamerec#aliasname}
  */
  readonly aliasname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec#canonicalname Dnscnamerec#canonicalname}
  */
  readonly canonicalname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec#ecssubnet Dnscnamerec#ecssubnet}
  */
  readonly ecssubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec#id Dnscnamerec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec#nodeid Dnscnamerec#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec#ttl Dnscnamerec#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec citrixadc_dnscnamerec}
*/
export class Dnscnamerec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnscnamerec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnscnamerec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnscnamerec to import
  * @param importFromId The id of the existing Dnscnamerec that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnscnamerec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnscnamerec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnscnamerec citrixadc_dnscnamerec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnscnamerecConfig
  */
  public constructor(scope: Construct, id: string, config: DnscnamerecConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnscnamerec',
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
    this._aliasname = config.aliasname;
    this._canonicalname = config.canonicalname;
    this._ecssubnet = config.ecssubnet;
    this._id = config.id;
    this._nodeid = config.nodeid;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliasname - computed: false, optional: false, required: true
  private _aliasname?: string; 
  public get aliasname() {
    return this.getStringAttribute('aliasname');
  }
  public set aliasname(value: string) {
    this._aliasname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasnameInput() {
    return this._aliasname;
  }

  // canonicalname - computed: false, optional: false, required: true
  private _canonicalname?: string; 
  public get canonicalname() {
    return this.getStringAttribute('canonicalname');
  }
  public set canonicalname(value: string) {
    this._canonicalname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalnameInput() {
    return this._canonicalname;
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
      aliasname: cdktf.stringToTerraform(this._aliasname),
      canonicalname: cdktf.stringToTerraform(this._canonicalname),
      ecssubnet: cdktf.stringToTerraform(this._ecssubnet),
      id: cdktf.stringToTerraform(this._id),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliasname: {
        value: cdktf.stringToHclTerraform(this._aliasname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      canonicalname: {
        value: cdktf.stringToHclTerraform(this._canonicalname),
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
