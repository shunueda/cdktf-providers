// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthChecksPingMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#compartment_id HealthChecksPingMonitor#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#defined_tags HealthChecksPingMonitor#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#display_name HealthChecksPingMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#freeform_tags HealthChecksPingMonitor#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#id HealthChecksPingMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#interval_in_seconds HealthChecksPingMonitor#interval_in_seconds}
  */
  readonly intervalInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#is_enabled HealthChecksPingMonitor#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#port HealthChecksPingMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#protocol HealthChecksPingMonitor#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#targets HealthChecksPingMonitor#targets}
  */
  readonly targets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#timeout_in_seconds HealthChecksPingMonitor#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#vantage_point_names HealthChecksPingMonitor#vantage_point_names}
  */
  readonly vantagePointNames?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#timeouts HealthChecksPingMonitor#timeouts}
  */
  readonly timeouts?: HealthChecksPingMonitorTimeouts;
}
export interface HealthChecksPingMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#create HealthChecksPingMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#delete HealthChecksPingMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#update HealthChecksPingMonitor#update}
  */
  readonly update?: string;
}

export function healthChecksPingMonitorTimeoutsToTerraform(struct?: HealthChecksPingMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function healthChecksPingMonitorTimeoutsToHclTerraform(struct?: HealthChecksPingMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthChecksPingMonitorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthChecksPingMonitorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthChecksPingMonitorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor oci_health_checks_ping_monitor}
*/
export class HealthChecksPingMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_health_checks_ping_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthChecksPingMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthChecksPingMonitor to import
  * @param importFromId The id of the existing HealthChecksPingMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthChecksPingMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_health_checks_ping_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/health_checks_ping_monitor oci_health_checks_ping_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthChecksPingMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: HealthChecksPingMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_health_checks_ping_monitor',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._intervalInSeconds = config.intervalInSeconds;
    this._isEnabled = config.isEnabled;
    this._port = config.port;
    this._protocol = config.protocol;
    this._targets = config.targets;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._vantagePointNames = config.vantagePointNames;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
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

  // interval_in_seconds - computed: false, optional: false, required: true
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // results_url - computed: true, optional: false, required: false
  public get resultsUrl() {
    return this.getStringAttribute('results_url');
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // vantage_point_names - computed: true, optional: true, required: false
  private _vantagePointNames?: string[]; 
  public get vantagePointNames() {
    return this.getListAttribute('vantage_point_names');
  }
  public set vantagePointNames(value: string[]) {
    this._vantagePointNames = value;
  }
  public resetVantagePointNames() {
    this._vantagePointNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vantagePointNamesInput() {
    return this._vantagePointNames;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HealthChecksPingMonitorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HealthChecksPingMonitorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      interval_in_seconds: cdktf.numberToTerraform(this._intervalInSeconds),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      vantage_point_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vantagePointNames),
      timeouts: healthChecksPingMonitorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval_in_seconds: {
        value: cdktf.numberToHclTerraform(this._intervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vantage_point_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vantagePointNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: healthChecksPingMonitorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthChecksPingMonitorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
