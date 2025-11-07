// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipFastAwsServiceDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to look for public or private IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#address_realm DataBigipFastAwsServiceDiscovery#address_realm}
  */
  readonly addressRealm?: string;
  /**
  * Information for discovering AWS nodes that are not in the same region as your BIG-IP (also requires the `aws_secret_access_key` field)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#aws_access_key DataBigipFastAwsServiceDiscovery#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * Empty string (`default`) means region in which ADC is running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#aws_region DataBigipFastAwsServiceDiscovery#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#aws_secret_access_key DataBigipFastAwsServiceDiscovery#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * Specifies whether you are updating your credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#credential_update DataBigipFastAwsServiceDiscovery#credential_update}
  */
  readonly credentialUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#external_id DataBigipFastAwsServiceDiscovery#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#id DataBigipFastAwsServiceDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#minimum_monitors DataBigipFastAwsServiceDiscovery#minimum_monitors}
  */
  readonly minimumMonitors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#port DataBigipFastAwsServiceDiscovery#port}
  */
  readonly port?: number;
  /**
  * Assume a role (also requires the externalId field)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#role_arn DataBigipFastAwsServiceDiscovery#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The tag key associated with the node to add to this pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#tag_key DataBigipFastAwsServiceDiscovery#tag_key}
  */
  readonly tagKey: string;
  /**
  * The tag value associated with the node to add to this pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#tag_value DataBigipFastAwsServiceDiscovery#tag_value}
  */
  readonly tagValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#type DataBigipFastAwsServiceDiscovery#type}
  */
  readonly type?: string;
  /**
  * Action to take when node cannot be detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#undetectable_action DataBigipFastAwsServiceDiscovery#undetectable_action}
  */
  readonly undetectableAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#update_interval DataBigipFastAwsServiceDiscovery#update_interval}
  */
  readonly updateInterval?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery bigip_fast_aws_service_discovery}
*/
export class DataBigipFastAwsServiceDiscovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_fast_aws_service_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipFastAwsServiceDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipFastAwsServiceDiscovery to import
  * @param importFromId The id of the existing DataBigipFastAwsServiceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipFastAwsServiceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_fast_aws_service_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_aws_service_discovery bigip_fast_aws_service_discovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipFastAwsServiceDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipFastAwsServiceDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_fast_aws_service_discovery',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressRealm = config.addressRealm;
    this._awsAccessKey = config.awsAccessKey;
    this._awsRegion = config.awsRegion;
    this._awsSecretAccessKey = config.awsSecretAccessKey;
    this._credentialUpdate = config.credentialUpdate;
    this._externalId = config.externalId;
    this._id = config.id;
    this._minimumMonitors = config.minimumMonitors;
    this._port = config.port;
    this._roleArn = config.roleArn;
    this._tagKey = config.tagKey;
    this._tagValue = config.tagValue;
    this._type = config.type;
    this._undetectableAction = config.undetectableAction;
    this._updateInterval = config.updateInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_realm - computed: false, optional: true, required: false
  private _addressRealm?: string; 
  public get addressRealm() {
    return this.getStringAttribute('address_realm');
  }
  public set addressRealm(value: string) {
    this._addressRealm = value;
  }
  public resetAddressRealm() {
    this._addressRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressRealmInput() {
    return this._addressRealm;
  }

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_sd_json - computed: true, optional: false, required: false
  public get awsSdJson() {
    return this.getStringAttribute('aws_sd_json');
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // credential_update - computed: false, optional: true, required: false
  private _credentialUpdate?: boolean | cdktf.IResolvable; 
  public get credentialUpdate() {
    return this.getBooleanAttribute('credential_update');
  }
  public set credentialUpdate(value: boolean | cdktf.IResolvable) {
    this._credentialUpdate = value;
  }
  public resetCredentialUpdate() {
    this._credentialUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialUpdateInput() {
    return this._credentialUpdate;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // minimum_monitors - computed: false, optional: true, required: false
  private _minimumMonitors?: string; 
  public get minimumMonitors() {
    return this.getStringAttribute('minimum_monitors');
  }
  public set minimumMonitors(value: string) {
    this._minimumMonitors = value;
  }
  public resetMinimumMonitors() {
    this._minimumMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumMonitorsInput() {
    return this._minimumMonitors;
  }

  // port - computed: false, optional: true, required: false
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
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

  // undetectable_action - computed: false, optional: true, required: false
  private _undetectableAction?: string; 
  public get undetectableAction() {
    return this.getStringAttribute('undetectable_action');
  }
  public set undetectableAction(value: string) {
    this._undetectableAction = value;
  }
  public resetUndetectableAction() {
    this._undetectableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undetectableActionInput() {
    return this._undetectableAction;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_realm: cdktf.stringToTerraform(this._addressRealm),
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secret_access_key: cdktf.stringToTerraform(this._awsSecretAccessKey),
      credential_update: cdktf.booleanToTerraform(this._credentialUpdate),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      minimum_monitors: cdktf.stringToTerraform(this._minimumMonitors),
      port: cdktf.numberToTerraform(this._port),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tag_key: cdktf.stringToTerraform(this._tagKey),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      type: cdktf.stringToTerraform(this._type),
      undetectable_action: cdktf.stringToTerraform(this._undetectableAction),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_realm: {
        value: cdktf.stringToHclTerraform(this._addressRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_update: {
        value: cdktf.booleanToHclTerraform(this._credentialUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      minimum_monitors: {
        value: cdktf.stringToHclTerraform(this._minimumMonitors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_key: {
        value: cdktf.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value: {
        value: cdktf.stringToHclTerraform(this._tagValue),
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
      undetectable_action: {
        value: cdktf.stringToHclTerraform(this._undetectableAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.stringToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
