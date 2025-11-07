// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable session affinity for the application pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#affinity AppPool#affinity}
  */
  readonly affinity?: boolean | cdktf.IResolvable;
  /**
  * The time each session is maintained in sec (Default: 300).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#affinity_session_duration AppPool#affinity_session_duration}
  */
  readonly affinitySessionDuration?: number;
  /**
  * The name of the application associated to the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#application AppPool#application}
  */
  readonly application: string;
  /**
  * Number of best active nodes when lb_mode is set to latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#best_active_nodes AppPool#best_active_nodes}
  */
  readonly bestActiveNodes?: number;
  /**
  * The fqdn of the application associated to the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#fqdn AppPool#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#id AppPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP protocol version used by the application pool to create (Supported: ipv4, ipv6; Default: ipv4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#ip_version AppPool#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The load balancing mode of the application pool to create (Supported: weighted,round-robin,latency; Default: round-robin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#lb_mode AppPool#lb_mode}
  */
  readonly lbMode?: string;
  /**
  * The name of the application pool to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#name AppPool#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool solidserver_app_pool}
*/
export class AppPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_app_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppPool to import
  * @param importFromId The id of the existing AppPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_app_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_pool solidserver_app_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppPoolConfig
  */
  public constructor(scope: Construct, id: string, config: AppPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_app_pool',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinity = config.affinity;
    this._affinitySessionDuration = config.affinitySessionDuration;
    this._application = config.application;
    this._bestActiveNodes = config.bestActiveNodes;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._lbMode = config.lbMode;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity - computed: false, optional: true, required: false
  private _affinity?: boolean | cdktf.IResolvable; 
  public get affinity() {
    return this.getBooleanAttribute('affinity');
  }
  public set affinity(value: boolean | cdktf.IResolvable) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // affinity_session_duration - computed: false, optional: true, required: false
  private _affinitySessionDuration?: number; 
  public get affinitySessionDuration() {
    return this.getNumberAttribute('affinity_session_duration');
  }
  public set affinitySessionDuration(value: number) {
    this._affinitySessionDuration = value;
  }
  public resetAffinitySessionDuration() {
    this._affinitySessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinitySessionDurationInput() {
    return this._affinitySessionDuration;
  }

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // best_active_nodes - computed: false, optional: true, required: false
  private _bestActiveNodes?: number; 
  public get bestActiveNodes() {
    return this.getNumberAttribute('best_active_nodes');
  }
  public set bestActiveNodes(value: number) {
    this._bestActiveNodes = value;
  }
  public resetBestActiveNodes() {
    this._bestActiveNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestActiveNodesInput() {
    return this._bestActiveNodes;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // lb_mode - computed: false, optional: true, required: false
  private _lbMode?: string; 
  public get lbMode() {
    return this.getStringAttribute('lb_mode');
  }
  public set lbMode(value: string) {
    this._lbMode = value;
  }
  public resetLbMode() {
    this._lbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbModeInput() {
    return this._lbMode;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity: cdktf.booleanToTerraform(this._affinity),
      affinity_session_duration: cdktf.numberToTerraform(this._affinitySessionDuration),
      application: cdktf.stringToTerraform(this._application),
      best_active_nodes: cdktf.numberToTerraform(this._bestActiveNodes),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      lb_mode: cdktf.stringToTerraform(this._lbMode),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity: {
        value: cdktf.booleanToHclTerraform(this._affinity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      affinity_session_duration: {
        value: cdktf.numberToHclTerraform(this._affinitySessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      best_active_nodes: {
        value: cdktf.numberToHclTerraform(this._bestActiveNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_mode: {
        value: cdktf.stringToHclTerraform(this._lbMode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
