// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Force force principal name even if host not in DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/service#force Service#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Principal name Service principal. Format: <service_type>/<hostname>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/service#krb_hostname Service#krb_hostname}
  */
  readonly krbHostname: string;
  /**
  * Skip host check force service to be created even when host object does not exist to manage it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/service#skip_host_check Service#skip_host_check}
  */
  readonly skipHostCheck?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/service freeipa_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/service freeipa_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_service',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._force = config.force;
    this._krbHostname = config.krbHostname;
    this._skipHostCheck = config.skipHostCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // krb_hostname - computed: false, optional: false, required: true
  private _krbHostname?: string; 
  public get krbHostname() {
    return this.getStringAttribute('krb_hostname');
  }
  public set krbHostname(value: string) {
    this._krbHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get krbHostnameInput() {
    return this._krbHostname;
  }

  // skip_host_check - computed: false, optional: true, required: false
  private _skipHostCheck?: boolean | cdktf.IResolvable; 
  public get skipHostCheck() {
    return this.getBooleanAttribute('skip_host_check');
  }
  public set skipHostCheck(value: boolean | cdktf.IResolvable) {
    this._skipHostCheck = value;
  }
  public resetSkipHostCheck() {
    this._skipHostCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHostCheckInput() {
    return this._skipHostCheck;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force: cdktf.booleanToTerraform(this._force),
      krb_hostname: cdktf.stringToTerraform(this._krbHostname),
      skip_host_check: cdktf.booleanToTerraform(this._skipHostCheck),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      krb_hostname: {
        value: cdktf.stringToHclTerraform(this._krbHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_host_check: {
        value: cdktf.booleanToHclTerraform(this._skipHostCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
