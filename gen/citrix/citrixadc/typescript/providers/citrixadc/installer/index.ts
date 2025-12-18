// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstallerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#enhancedupgrade Installer#enhancedupgrade}
  */
  readonly enhancedupgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#id Installer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#l Installer#l}
  */
  readonly l?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#reachable_poll_delay Installer#reachable_poll_delay}
  */
  readonly reachablePollDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#reachable_poll_interval Installer#reachable_poll_interval}
  */
  readonly reachablePollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#reachable_poll_timeout Installer#reachable_poll_timeout}
  */
  readonly reachablePollTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#reachable_timeout Installer#reachable_timeout}
  */
  readonly reachableTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#resizeswapvar Installer#resizeswapvar}
  */
  readonly resizeswapvar?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#url Installer#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#wait_until_reachable Installer#wait_until_reachable}
  */
  readonly waitUntilReachable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#y Installer#y}
  */
  readonly y?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer citrixadc_installer}
*/
export class Installer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_installer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Installer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Installer to import
  * @param importFromId The id of the existing Installer that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Installer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_installer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/installer citrixadc_installer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstallerConfig
  */
  public constructor(scope: Construct, id: string, config: InstallerConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_installer',
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
    this._enhancedupgrade = config.enhancedupgrade;
    this._id = config.id;
    this._l = config.l;
    this._reachablePollDelay = config.reachablePollDelay;
    this._reachablePollInterval = config.reachablePollInterval;
    this._reachablePollTimeout = config.reachablePollTimeout;
    this._reachableTimeout = config.reachableTimeout;
    this._resizeswapvar = config.resizeswapvar;
    this._url = config.url;
    this._waitUntilReachable = config.waitUntilReachable;
    this._y = config.y;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enhancedupgrade - computed: true, optional: true, required: false
  private _enhancedupgrade?: boolean | cdktf.IResolvable; 
  public get enhancedupgrade() {
    return this.getBooleanAttribute('enhancedupgrade');
  }
  public set enhancedupgrade(value: boolean | cdktf.IResolvable) {
    this._enhancedupgrade = value;
  }
  public resetEnhancedupgrade() {
    this._enhancedupgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedupgradeInput() {
    return this._enhancedupgrade;
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

  // l - computed: true, optional: true, required: false
  private _l?: boolean | cdktf.IResolvable; 
  public get l() {
    return this.getBooleanAttribute('l');
  }
  public set l(value: boolean | cdktf.IResolvable) {
    this._l = value;
  }
  public resetL() {
    this._l = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lInput() {
    return this._l;
  }

  // reachable_poll_delay - computed: false, optional: true, required: false
  private _reachablePollDelay?: string; 
  public get reachablePollDelay() {
    return this.getStringAttribute('reachable_poll_delay');
  }
  public set reachablePollDelay(value: string) {
    this._reachablePollDelay = value;
  }
  public resetReachablePollDelay() {
    this._reachablePollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachablePollDelayInput() {
    return this._reachablePollDelay;
  }

  // reachable_poll_interval - computed: false, optional: true, required: false
  private _reachablePollInterval?: string; 
  public get reachablePollInterval() {
    return this.getStringAttribute('reachable_poll_interval');
  }
  public set reachablePollInterval(value: string) {
    this._reachablePollInterval = value;
  }
  public resetReachablePollInterval() {
    this._reachablePollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachablePollIntervalInput() {
    return this._reachablePollInterval;
  }

  // reachable_poll_timeout - computed: false, optional: true, required: false
  private _reachablePollTimeout?: string; 
  public get reachablePollTimeout() {
    return this.getStringAttribute('reachable_poll_timeout');
  }
  public set reachablePollTimeout(value: string) {
    this._reachablePollTimeout = value;
  }
  public resetReachablePollTimeout() {
    this._reachablePollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachablePollTimeoutInput() {
    return this._reachablePollTimeout;
  }

  // reachable_timeout - computed: false, optional: true, required: false
  private _reachableTimeout?: string; 
  public get reachableTimeout() {
    return this.getStringAttribute('reachable_timeout');
  }
  public set reachableTimeout(value: string) {
    this._reachableTimeout = value;
  }
  public resetReachableTimeout() {
    this._reachableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeoutInput() {
    return this._reachableTimeout;
  }

  // resizeswapvar - computed: true, optional: true, required: false
  private _resizeswapvar?: boolean | cdktf.IResolvable; 
  public get resizeswapvar() {
    return this.getBooleanAttribute('resizeswapvar');
  }
  public set resizeswapvar(value: boolean | cdktf.IResolvable) {
    this._resizeswapvar = value;
  }
  public resetResizeswapvar() {
    this._resizeswapvar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeswapvarInput() {
    return this._resizeswapvar;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // wait_until_reachable - computed: false, optional: false, required: true
  private _waitUntilReachable?: boolean | cdktf.IResolvable; 
  public get waitUntilReachable() {
    return this.getBooleanAttribute('wait_until_reachable');
  }
  public set waitUntilReachable(value: boolean | cdktf.IResolvable) {
    this._waitUntilReachable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReachableInput() {
    return this._waitUntilReachable;
  }

  // y - computed: true, optional: true, required: false
  private _y?: boolean | cdktf.IResolvable; 
  public get y() {
    return this.getBooleanAttribute('y');
  }
  public set y(value: boolean | cdktf.IResolvable) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enhancedupgrade: cdktf.booleanToTerraform(this._enhancedupgrade),
      id: cdktf.stringToTerraform(this._id),
      l: cdktf.booleanToTerraform(this._l),
      reachable_poll_delay: cdktf.stringToTerraform(this._reachablePollDelay),
      reachable_poll_interval: cdktf.stringToTerraform(this._reachablePollInterval),
      reachable_poll_timeout: cdktf.stringToTerraform(this._reachablePollTimeout),
      reachable_timeout: cdktf.stringToTerraform(this._reachableTimeout),
      resizeswapvar: cdktf.booleanToTerraform(this._resizeswapvar),
      url: cdktf.stringToTerraform(this._url),
      wait_until_reachable: cdktf.booleanToTerraform(this._waitUntilReachable),
      y: cdktf.booleanToTerraform(this._y),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enhancedupgrade: {
        value: cdktf.booleanToHclTerraform(this._enhancedupgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l: {
        value: cdktf.booleanToHclTerraform(this._l),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reachable_poll_delay: {
        value: cdktf.stringToHclTerraform(this._reachablePollDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_poll_interval: {
        value: cdktf.stringToHclTerraform(this._reachablePollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_poll_timeout: {
        value: cdktf.stringToHclTerraform(this._reachablePollTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_timeout: {
        value: cdktf.stringToHclTerraform(this._reachableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resizeswapvar: {
        value: cdktf.booleanToHclTerraform(this._resizeswapvar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_reachable: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReachable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      y: {
        value: cdktf.booleanToHclTerraform(this._y),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
