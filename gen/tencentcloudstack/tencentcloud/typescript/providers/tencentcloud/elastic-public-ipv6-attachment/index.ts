// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticPublicIpv6AttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment#id ElasticPublicIpv6Attachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Elastic IPv6 unique ID, EIPv6 unique ID is like eipv6-11112222.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment#ipv6_address_id ElasticPublicIpv6Attachment#ipv6_address_id}
  */
  readonly ipv6AddressId: string;
  /**
  * Whether to keep the Elastic Network Interface bound when unbinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment#keep_bind_with_eni ElasticPublicIpv6Attachment#keep_bind_with_eni}
  */
  readonly keepBindWithEni?: boolean | cdktf.IResolvable;
  /**
  * Elastic Network Interface ID to bind. Elastic Network Interface ID is like eni-11112222. NetworkInterfaceId and InstanceId cannot be specified simultaneously. The Elastic Network Interface ID can be queried by logging in to the console, or obtained through the networkInterfaceId in the return value of the DescribeNetworkInterfaces interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment#network_interface_id ElasticPublicIpv6Attachment#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * The intranet IPv6 to bind. If NetworkInterfaceId is specified, PrivateIPv6Address must also be specified, which means that the EIP is bound to the specified private network IP of the specified Elastic Network Interface. Also ensure that the specified PrivateIPv6Address is an intranet IPv6 on the specified NetworkInterfaceId. The intranet IPv6 of the specified Elastic Network Interface can be queried by logging in to the console, or obtained through the Ipv6AddressSet.Address in the return value of the DescribeNetworkInterfaces interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment#private_ipv6_address ElasticPublicIpv6Attachment#private_ipv6_address}
  */
  readonly privateIpv6Address?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment tencentcloud_elastic_public_ipv6_attachment}
*/
export class ElasticPublicIpv6Attachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elastic_public_ipv6_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticPublicIpv6Attachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticPublicIpv6Attachment to import
  * @param importFromId The id of the existing ElasticPublicIpv6Attachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticPublicIpv6Attachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elastic_public_ipv6_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/elastic_public_ipv6_attachment tencentcloud_elastic_public_ipv6_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticPublicIpv6AttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticPublicIpv6AttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elastic_public_ipv6_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipv6AddressId = config.ipv6AddressId;
    this._keepBindWithEni = config.keepBindWithEni;
    this._networkInterfaceId = config.networkInterfaceId;
    this._privateIpv6Address = config.privateIpv6Address;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv6_address_id - computed: false, optional: false, required: true
  private _ipv6AddressId?: string; 
  public get ipv6AddressId() {
    return this.getStringAttribute('ipv6_address_id');
  }
  public set ipv6AddressId(value: string) {
    this._ipv6AddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIdInput() {
    return this._ipv6AddressId;
  }

  // keep_bind_with_eni - computed: false, optional: true, required: false
  private _keepBindWithEni?: boolean | cdktf.IResolvable; 
  public get keepBindWithEni() {
    return this.getBooleanAttribute('keep_bind_with_eni');
  }
  public set keepBindWithEni(value: boolean | cdktf.IResolvable) {
    this._keepBindWithEni = value;
  }
  public resetKeepBindWithEni() {
    this._keepBindWithEni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepBindWithEniInput() {
    return this._keepBindWithEni;
  }

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // private_ipv6_address - computed: false, optional: true, required: false
  private _privateIpv6Address?: string; 
  public get privateIpv6Address() {
    return this.getStringAttribute('private_ipv6_address');
  }
  public set privateIpv6Address(value: string) {
    this._privateIpv6Address = value;
  }
  public resetPrivateIpv6Address() {
    this._privateIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6AddressInput() {
    return this._privateIpv6Address;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6_address_id: cdktf.stringToTerraform(this._ipv6AddressId),
      keep_bind_with_eni: cdktf.booleanToTerraform(this._keepBindWithEni),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      private_ipv6_address: cdktf.stringToTerraform(this._privateIpv6Address),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_id: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_bind_with_eni: {
        value: cdktf.booleanToHclTerraform(this._keepBindWithEni),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._privateIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
