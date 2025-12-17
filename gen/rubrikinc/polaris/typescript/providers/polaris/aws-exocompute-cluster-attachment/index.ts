// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_exocompute_cluster_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsExocomputeClusterAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS EKS cluster name. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_exocompute_cluster_attachment#cluster_name AwsExocomputeClusterAttachment#cluster_name}
  */
  readonly clusterName: string;
  /**
  * RSC exocompute configuration ID (UUID). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_exocompute_cluster_attachment#exocompute_id AwsExocomputeClusterAttachment#exocompute_id}
  */
  readonly exocomputeId: string;
  /**
  * To force a refresh of the authentication token, part of the connection command and manifest, increase the value of this field. The token is valid for 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_exocompute_cluster_attachment#token_refresh AwsExocomputeClusterAttachment#token_refresh}
  */
  readonly tokenRefresh?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_exocompute_cluster_attachment polaris_aws_exocompute_cluster_attachment}
*/
export class AwsExocomputeClusterAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_exocompute_cluster_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsExocomputeClusterAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsExocomputeClusterAttachment to import
  * @param importFromId The id of the existing AwsExocomputeClusterAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_exocompute_cluster_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsExocomputeClusterAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_exocompute_cluster_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_exocompute_cluster_attachment polaris_aws_exocompute_cluster_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsExocomputeClusterAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AwsExocomputeClusterAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_exocompute_cluster_attachment',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._exocomputeId = config.exocomputeId;
    this._tokenRefresh = config.tokenRefresh;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // connection_command - computed: true, optional: false, required: false
  public get connectionCommand() {
    return this.getStringAttribute('connection_command');
  }

  // connection_command_executed - computed: true, optional: false, required: false
  public get connectionCommandExecuted() {
    return this.getBooleanAttribute('connection_command_executed');
  }

  // exocompute_id - computed: false, optional: false, required: true
  private _exocomputeId?: string; 
  public get exocomputeId() {
    return this.getStringAttribute('exocompute_id');
  }
  public set exocomputeId(value: string) {
    this._exocomputeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exocomputeIdInput() {
    return this._exocomputeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
  }

  // setup_yaml - computed: true, optional: false, required: false
  public get setupYaml() {
    return this.getStringAttribute('setup_yaml');
  }

  // token_refresh - computed: false, optional: true, required: false
  private _tokenRefresh?: number; 
  public get tokenRefresh() {
    return this.getNumberAttribute('token_refresh');
  }
  public set tokenRefresh(value: number) {
    this._tokenRefresh = value;
  }
  public resetTokenRefresh() {
    this._tokenRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshInput() {
    return this._tokenRefresh;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      exocompute_id: cdktf.stringToTerraform(this._exocomputeId),
      token_refresh: cdktf.numberToTerraform(this._tokenRefresh),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exocompute_id: {
        value: cdktf.stringToHclTerraform(this._exocomputeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_refresh: {
        value: cdktf.numberToHclTerraform(this._tokenRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
