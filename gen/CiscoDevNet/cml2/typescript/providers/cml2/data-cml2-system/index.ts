// https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/data-sources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCml2SystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to `true`, then errors will be ignored during the ready check. This can help when using proxies which might return intermediate errors especially during the initial phase where gateway timeouts or proxy errors might be returned because of initial connectivity issues towards the CML2 instance. Will default to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/data-sources/system#ignore_errors DataCml2System#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Shows if the CML system API is ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/data-sources/system#ready DataCml2System#ready}
  */
  readonly ready?: boolean | cdktf.IResolvable;
  /**
  * Wait timeout, like `5m`, defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/data-sources/system#timeout DataCml2System#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/data-sources/system cml2_system}
*/
export class DataCml2System extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cml2_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCml2System resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCml2System to import
  * @param importFromId The id of the existing DataCml2System that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/data-sources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCml2System to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cml2_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/data-sources/system cml2_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCml2SystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCml2SystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cml2_system',
      terraformGeneratorMetadata: {
        providerName: 'cml2',
        providerVersion: '0.8.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ignoreErrors = config.ignoreErrors;
    this._ready = config.ready;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ready - computed: false, optional: true, required: false
  private _ready?: boolean | cdktf.IResolvable; 
  public get ready() {
    return this.getBooleanAttribute('ready');
  }
  public set ready(value: boolean | cdktf.IResolvable) {
    this._ready = value;
  }
  public resetReady() {
    this._ready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyInput() {
    return this._ready;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ready: cdktf.booleanToTerraform(this._ready),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ready: {
        value: cdktf.booleanToHclTerraform(this._ready),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
