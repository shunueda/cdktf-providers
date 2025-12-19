// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServicesCloudProviderAwsMultiAzFailoverVridVipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Elastic IP address of VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip#elastic_ip CloudServicesCloudProviderAwsMultiAzFailoverVridVip#elastic_ip}
  */
  readonly elasticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip#id CloudServicesCloudProviderAwsMultiAzFailoverVridVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Private IP address of VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip#private_ip CloudServicesCloudProviderAwsMultiAzFailoverVridVip#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip#user_tag CloudServicesCloudProviderAwsMultiAzFailoverVridVip#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip#uuid CloudServicesCloudProviderAwsMultiAzFailoverVridVip#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify ha vip Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip#vip_number CloudServicesCloudProviderAwsMultiAzFailoverVridVip#vip_number}
  */
  readonly vipNumber: number;
  /**
  * VridNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip#vrid_number CloudServicesCloudProviderAwsMultiAzFailoverVridVip#vrid_number}
  */
  readonly vridNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip}
*/
export class CloudServicesCloudProviderAwsMultiAzFailoverVridVip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServicesCloudProviderAwsMultiAzFailoverVridVip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServicesCloudProviderAwsMultiAzFailoverVridVip to import
  * @param importFromId The id of the existing CloudServicesCloudProviderAwsMultiAzFailoverVridVip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServicesCloudProviderAwsMultiAzFailoverVridVip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServicesCloudProviderAwsMultiAzFailoverVridVipConfig
  */
  public constructor(scope: Construct, id: string, config: CloudServicesCloudProviderAwsMultiAzFailoverVridVipConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid_vip',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._elasticIp = config.elasticIp;
    this._id = config.id;
    this._privateIp = config.privateIp;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vipNumber = config.vipNumber;
    this._vridNumber = config.vridNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // elastic_ip - computed: false, optional: true, required: false
  private _elasticIp?: string; 
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }
  public set elasticIp(value: string) {
    this._elasticIp = value;
  }
  public resetElasticIp() {
    this._elasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpInput() {
    return this._elasticIp;
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

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vip_number - computed: false, optional: false, required: true
  private _vipNumber?: number; 
  public get vipNumber() {
    return this.getNumberAttribute('vip_number');
  }
  public set vipNumber(value: number) {
    this._vipNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNumberInput() {
    return this._vipNumber;
  }

  // vrid_number - computed: false, optional: false, required: true
  private _vridNumber?: string; 
  public get vridNumber() {
    return this.getStringAttribute('vrid_number');
  }
  public set vridNumber(value: string) {
    this._vridNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridNumberInput() {
    return this._vridNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      elastic_ip: cdktf.stringToTerraform(this._elasticIp),
      id: cdktf.stringToTerraform(this._id),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vip_number: cdktf.numberToTerraform(this._vipNumber),
      vrid_number: cdktf.stringToTerraform(this._vridNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      elastic_ip: {
        value: cdktf.stringToHclTerraform(this._elasticIp),
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
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_number: {
        value: cdktf.numberToHclTerraform(this._vipNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrid_number: {
        value: cdktf.stringToHclTerraform(this._vridNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
