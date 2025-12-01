// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackApiGatewayV2CascadeLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#cascade_instance_id ApsarastackApiGatewayV2CascadeLink#cascade_instance_id}
  */
  readonly cascadeInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#cascade_instance_name ApsarastackApiGatewayV2CascadeLink#cascade_instance_name}
  */
  readonly cascadeInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#cascade_service_id ApsarastackApiGatewayV2CascadeLink#cascade_service_id}
  */
  readonly cascadeServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#id ApsarastackApiGatewayV2CascadeLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#link_name ApsarastackApiGatewayV2CascadeLink#link_name}
  */
  readonly linkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#source_instance_address ApsarastackApiGatewayV2CascadeLink#source_instance_address}
  */
  readonly sourceInstanceAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#source_instance_id ApsarastackApiGatewayV2CascadeLink#source_instance_id}
  */
  readonly sourceInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#source_instance_name ApsarastackApiGatewayV2CascadeLink#source_instance_name}
  */
  readonly sourceInstanceName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link apsarastack_api_gateway_v2_cascade_link}
*/
export class ApsarastackApiGatewayV2CascadeLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_api_gateway_v2_cascade_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackApiGatewayV2CascadeLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackApiGatewayV2CascadeLink to import
  * @param importFromId The id of the existing ApsarastackApiGatewayV2CascadeLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackApiGatewayV2CascadeLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_api_gateway_v2_cascade_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_api_gateway_v2_cascade_link apsarastack_api_gateway_v2_cascade_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackApiGatewayV2CascadeLinkConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackApiGatewayV2CascadeLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_api_gateway_v2_cascade_link',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cascadeInstanceId = config.cascadeInstanceId;
    this._cascadeInstanceName = config.cascadeInstanceName;
    this._cascadeServiceId = config.cascadeServiceId;
    this._id = config.id;
    this._linkName = config.linkName;
    this._sourceInstanceAddress = config.sourceInstanceAddress;
    this._sourceInstanceId = config.sourceInstanceId;
    this._sourceInstanceName = config.sourceInstanceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cascade_instance_id - computed: false, optional: false, required: true
  private _cascadeInstanceId?: string; 
  public get cascadeInstanceId() {
    return this.getStringAttribute('cascade_instance_id');
  }
  public set cascadeInstanceId(value: string) {
    this._cascadeInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeInstanceIdInput() {
    return this._cascadeInstanceId;
  }

  // cascade_instance_name - computed: true, optional: true, required: false
  private _cascadeInstanceName?: string; 
  public get cascadeInstanceName() {
    return this.getStringAttribute('cascade_instance_name');
  }
  public set cascadeInstanceName(value: string) {
    this._cascadeInstanceName = value;
  }
  public resetCascadeInstanceName() {
    this._cascadeInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeInstanceNameInput() {
    return this._cascadeInstanceName;
  }

  // cascade_service_id - computed: true, optional: true, required: false
  private _cascadeServiceId?: string; 
  public get cascadeServiceId() {
    return this.getStringAttribute('cascade_service_id');
  }
  public set cascadeServiceId(value: string) {
    this._cascadeServiceId = value;
  }
  public resetCascadeServiceId() {
    this._cascadeServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeServiceIdInput() {
    return this._cascadeServiceId;
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

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
  }

  // link_name - computed: false, optional: false, required: true
  private _linkName?: string; 
  public get linkName() {
    return this.getStringAttribute('link_name');
  }
  public set linkName(value: string) {
    this._linkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkNameInput() {
    return this._linkName;
  }

  // source_instance_address - computed: false, optional: false, required: true
  private _sourceInstanceAddress?: string; 
  public get sourceInstanceAddress() {
    return this.getStringAttribute('source_instance_address');
  }
  public set sourceInstanceAddress(value: string) {
    this._sourceInstanceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceAddressInput() {
    return this._sourceInstanceAddress;
  }

  // source_instance_id - computed: false, optional: false, required: true
  private _sourceInstanceId?: string; 
  public get sourceInstanceId() {
    return this.getStringAttribute('source_instance_id');
  }
  public set sourceInstanceId(value: string) {
    this._sourceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceIdInput() {
    return this._sourceInstanceId;
  }

  // source_instance_name - computed: true, optional: true, required: false
  private _sourceInstanceName?: string; 
  public get sourceInstanceName() {
    return this.getStringAttribute('source_instance_name');
  }
  public set sourceInstanceName(value: string) {
    this._sourceInstanceName = value;
  }
  public resetSourceInstanceName() {
    this._sourceInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceNameInput() {
    return this._sourceInstanceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cascade_instance_id: cdktf.stringToTerraform(this._cascadeInstanceId),
      cascade_instance_name: cdktf.stringToTerraform(this._cascadeInstanceName),
      cascade_service_id: cdktf.stringToTerraform(this._cascadeServiceId),
      id: cdktf.stringToTerraform(this._id),
      link_name: cdktf.stringToTerraform(this._linkName),
      source_instance_address: cdktf.stringToTerraform(this._sourceInstanceAddress),
      source_instance_id: cdktf.stringToTerraform(this._sourceInstanceId),
      source_instance_name: cdktf.stringToTerraform(this._sourceInstanceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cascade_instance_id: {
        value: cdktf.stringToHclTerraform(this._cascadeInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cascade_instance_name: {
        value: cdktf.stringToHclTerraform(this._cascadeInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cascade_service_id: {
        value: cdktf.stringToHclTerraform(this._cascadeServiceId),
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
      link_name: {
        value: cdktf.stringToHclTerraform(this._linkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_instance_address: {
        value: cdktf.stringToHclTerraform(this._sourceInstanceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_instance_id: {
        value: cdktf.stringToHclTerraform(this._sourceInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_instance_name: {
        value: cdktf.stringToHclTerraform(this._sourceInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
