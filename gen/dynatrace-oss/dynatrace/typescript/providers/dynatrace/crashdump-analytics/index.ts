// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/crashdump_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrashdumpAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable the feature to stop receiving information about crash details and potential problems. We recommend keeping the feature enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/crashdump_analytics#enable_crash_dump_analytics CrashdumpAnalytics#enable_crash_dump_analytics}
  */
  readonly enableCrashDumpAnalytics: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (HOST HOST_GROUP environment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/crashdump_analytics#host_id CrashdumpAnalytics#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/crashdump_analytics#id CrashdumpAnalytics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/crashdump_analytics dynatrace_crashdump_analytics}
*/
export class CrashdumpAnalytics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_crashdump_analytics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrashdumpAnalytics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrashdumpAnalytics to import
  * @param importFromId The id of the existing CrashdumpAnalytics that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/crashdump_analytics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrashdumpAnalytics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_crashdump_analytics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/crashdump_analytics dynatrace_crashdump_analytics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrashdumpAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: CrashdumpAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_crashdump_analytics',
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
    this._enableCrashDumpAnalytics = config.enableCrashDumpAnalytics;
    this._hostId = config.hostId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_crash_dump_analytics - computed: false, optional: false, required: true
  private _enableCrashDumpAnalytics?: boolean | cdktf.IResolvable; 
  public get enableCrashDumpAnalytics() {
    return this.getBooleanAttribute('enable_crash_dump_analytics');
  }
  public set enableCrashDumpAnalytics(value: boolean | cdktf.IResolvable) {
    this._enableCrashDumpAnalytics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrashDumpAnalyticsInput() {
    return this._enableCrashDumpAnalytics;
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
      enable_crash_dump_analytics: cdktf.booleanToTerraform(this._enableCrashDumpAnalytics),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_crash_dump_analytics: {
        value: cdktf.booleanToHclTerraform(this._enableCrashDumpAnalytics),
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
