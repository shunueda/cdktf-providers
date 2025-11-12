// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_resource_capture
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionReplayResourceCaptureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_resource_capture#application_id SessionReplayResourceCapture#application_id}
  */
  readonly applicationId?: string;
  /**
  * (Field has overlap with `dynatrace_web_application`) When turned on, Dynatrace captures resources for up to 0.1% of user sessions recorded with Session Replay. For details, see [Resource capture](https://dt-url.net/sr-resource-capturing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_resource_capture#enable_resource_capturing SessionReplayResourceCapture#enable_resource_capturing}
  */
  readonly enableResourceCapturing: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_resource_capture#id SessionReplayResourceCapture#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Field has overlap with `dynatrace_web_application`) Add exclusion rules to avoid the capture of resources from certain pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_resource_capture#resource_capture_url_exclusion_pattern_list SessionReplayResourceCapture#resource_capture_url_exclusion_pattern_list}
  */
  readonly resourceCaptureUrlExclusionPatternList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_resource_capture dynatrace_session_replay_resource_capture}
*/
export class SessionReplayResourceCapture extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_session_replay_resource_capture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionReplayResourceCapture resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionReplayResourceCapture to import
  * @param importFromId The id of the existing SessionReplayResourceCapture that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_resource_capture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionReplayResourceCapture to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_session_replay_resource_capture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_resource_capture dynatrace_session_replay_resource_capture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionReplayResourceCaptureConfig
  */
  public constructor(scope: Construct, id: string, config: SessionReplayResourceCaptureConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_session_replay_resource_capture',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._enableResourceCapturing = config.enableResourceCapturing;
    this._id = config.id;
    this._resourceCaptureUrlExclusionPatternList = config.resourceCaptureUrlExclusionPatternList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // enable_resource_capturing - computed: false, optional: false, required: true
  private _enableResourceCapturing?: boolean | cdktf.IResolvable; 
  public get enableResourceCapturing() {
    return this.getBooleanAttribute('enable_resource_capturing');
  }
  public set enableResourceCapturing(value: boolean | cdktf.IResolvable) {
    this._enableResourceCapturing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceCapturingInput() {
    return this._enableResourceCapturing;
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

  // resource_capture_url_exclusion_pattern_list - computed: false, optional: true, required: false
  private _resourceCaptureUrlExclusionPatternList?: string[]; 
  public get resourceCaptureUrlExclusionPatternList() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_capture_url_exclusion_pattern_list'));
  }
  public set resourceCaptureUrlExclusionPatternList(value: string[]) {
    this._resourceCaptureUrlExclusionPatternList = value;
  }
  public resetResourceCaptureUrlExclusionPatternList() {
    this._resourceCaptureUrlExclusionPatternList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCaptureUrlExclusionPatternListInput() {
    return this._resourceCaptureUrlExclusionPatternList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      enable_resource_capturing: cdktf.booleanToTerraform(this._enableResourceCapturing),
      id: cdktf.stringToTerraform(this._id),
      resource_capture_url_exclusion_pattern_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceCaptureUrlExclusionPatternList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_resource_capturing: {
        value: cdktf.booleanToHclTerraform(this._enableResourceCapturing),
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
      resource_capture_url_exclusion_pattern_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceCaptureUrlExclusionPatternList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
