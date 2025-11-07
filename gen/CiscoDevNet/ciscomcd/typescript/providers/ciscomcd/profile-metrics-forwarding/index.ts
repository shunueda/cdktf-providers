// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileMetricsForwardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#auth_token ProfileMetricsForwarding#auth_token}
  */
  readonly authToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#bucket_name ProfileMetricsForwarding#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#bucket_prefix ProfileMetricsForwarding#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#csp_account_name ProfileMetricsForwarding#csp_account_name}
  */
  readonly cspAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#description ProfileMetricsForwarding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#destination ProfileMetricsForwarding#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#endpoint ProfileMetricsForwarding#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#group_member_ids ProfileMetricsForwarding#group_member_ids}
  */
  readonly groupMemberIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#id ProfileMetricsForwarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#name ProfileMetricsForwarding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#skip_verify ProfileMetricsForwarding#skip_verify}
  */
  readonly skipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#splunk_index ProfileMetricsForwarding#splunk_index}
  */
  readonly splunkIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#type ProfileMetricsForwarding#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding ciscomcd_profile_metrics_forwarding}
*/
export class ProfileMetricsForwarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_profile_metrics_forwarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileMetricsForwarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileMetricsForwarding to import
  * @param importFromId The id of the existing ProfileMetricsForwarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileMetricsForwarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_profile_metrics_forwarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_metrics_forwarding ciscomcd_profile_metrics_forwarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileMetricsForwardingConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileMetricsForwardingConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_profile_metrics_forwarding',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authToken = config.authToken;
    this._bucketName = config.bucketName;
    this._bucketPrefix = config.bucketPrefix;
    this._cspAccountName = config.cspAccountName;
    this._description = config.description;
    this._destination = config.destination;
    this._endpoint = config.endpoint;
    this._groupMemberIds = config.groupMemberIds;
    this._id = config.id;
    this._name = config.name;
    this._skipVerify = config.skipVerify;
    this._splunkIndex = config.splunkIndex;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // csp_account_name - computed: false, optional: true, required: false
  private _cspAccountName?: string; 
  public get cspAccountName() {
    return this.getStringAttribute('csp_account_name');
  }
  public set cspAccountName(value: string) {
    this._cspAccountName = value;
  }
  public resetCspAccountName() {
    this._cspAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAccountNameInput() {
    return this._cspAccountName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // group_member_ids - computed: false, optional: true, required: false
  private _groupMemberIds?: number[]; 
  public get groupMemberIds() {
    return this.getNumberListAttribute('group_member_ids');
  }
  public set groupMemberIds(value: number[]) {
    this._groupMemberIds = value;
  }
  public resetGroupMemberIds() {
    this._groupMemberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberIdsInput() {
    return this._groupMemberIds;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktf.IResolvable; 
  public get skipVerify() {
    return this.getBooleanAttribute('skip_verify');
  }
  public set skipVerify(value: boolean | cdktf.IResolvable) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
  }

  // splunk_index - computed: false, optional: true, required: false
  private _splunkIndex?: string; 
  public get splunkIndex() {
    return this.getStringAttribute('splunk_index');
  }
  public set splunkIndex(value: string) {
    this._splunkIndex = value;
  }
  public resetSplunkIndex() {
    this._splunkIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkIndexInput() {
    return this._splunkIndex;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_token: cdktf.stringToTerraform(this._authToken),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      csp_account_name: cdktf.stringToTerraform(this._cspAccountName),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      group_member_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupMemberIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      skip_verify: cdktf.booleanToTerraform(this._skipVerify),
      splunk_index: cdktf.stringToTerraform(this._splunkIndex),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_account_name: {
        value: cdktf.stringToHclTerraform(this._cspAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupMemberIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      skip_verify: {
        value: cdktf.booleanToHclTerraform(this._skipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      splunk_index: {
        value: cdktf.stringToHclTerraform(this._splunkIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
