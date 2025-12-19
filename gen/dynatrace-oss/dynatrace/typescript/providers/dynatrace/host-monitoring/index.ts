// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * An auto-injection disabled with [oneagentctl](https://dt-url.net/oneagentctl) takes precedence over this setting and cannot be changed from the Dynatrace web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring#auto_injection HostMonitoring#auto_injection}
  */
  readonly autoInjection?: boolean | cdktf.IResolvable;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring#enabled HostMonitoring#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Dynatrace uses full-stack monitoring by default, to monitor every aspect of your environment, including all processes, services, and applications detected on your hosts. 
  * 
  * If you turn off full-stack monitoring, Dynatrace will only monitor your infrastructure. You will lose access to application performance, user experience data, code-level visibility and PurePath insights. 
  * 
  * To learn more, visit [Infrastructure Monitoring mode](https://www.dynatrace.com/support/help/shortlink/infrastructure).
  * 
  * Please note that changing the monitoring mode will impact the license consumption of this OneAgent. To learn more, visit [Host units](https://dt-url.net/hi03uns).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring#full_stack HostMonitoring#full_stack}
  */
  readonly fullStack?: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring#host_id HostMonitoring#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring#id HostMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring dynatrace_host_monitoring}
*/
export class HostMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_host_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostMonitoring to import
  * @param importFromId The id of the existing HostMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_host_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/host_monitoring dynatrace_host_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: HostMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_host_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoInjection = config.autoInjection;
    this._enabled = config.enabled;
    this._fullStack = config.fullStack;
    this._hostId = config.hostId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_injection - computed: false, optional: true, required: false
  private _autoInjection?: boolean | cdktf.IResolvable; 
  public get autoInjection() {
    return this.getBooleanAttribute('auto_injection');
  }
  public set autoInjection(value: boolean | cdktf.IResolvable) {
    this._autoInjection = value;
  }
  public resetAutoInjection() {
    this._autoInjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInjectionInput() {
    return this._autoInjection;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // full_stack - computed: false, optional: true, required: false
  private _fullStack?: boolean | cdktf.IResolvable; 
  public get fullStack() {
    return this.getBooleanAttribute('full_stack');
  }
  public set fullStack(value: boolean | cdktf.IResolvable) {
    this._fullStack = value;
  }
  public resetFullStack() {
    this._fullStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullStackInput() {
    return this._fullStack;
  }

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_injection: cdktf.booleanToTerraform(this._autoInjection),
      enabled: cdktf.booleanToTerraform(this._enabled),
      full_stack: cdktf.booleanToTerraform(this._fullStack),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_injection: {
        value: cdktf.booleanToHclTerraform(this._autoInjection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_stack: {
        value: cdktf.booleanToHclTerraform(this._fullStack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
