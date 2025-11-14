// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FloatingIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#api_version FloatingIp#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#external_subnet_reference_name FloatingIp#external_subnet_reference_name}
  */
  readonly externalSubnetReferenceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#external_subnet_reference_uuid FloatingIp#external_subnet_reference_uuid}
  */
  readonly externalSubnetReferenceUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#id FloatingIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#private_ip FloatingIp#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#vm_nic_reference_uuid FloatingIp#vm_nic_reference_uuid}
  */
  readonly vmNicReferenceUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#vpc_reference_name FloatingIp#vpc_reference_name}
  */
  readonly vpcReferenceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#vpc_reference_uuid FloatingIp#vpc_reference_uuid}
  */
  readonly vpcReferenceUuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip nutanix_floating_ip}
*/
export class FloatingIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_floating_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FloatingIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FloatingIp to import
  * @param importFromId The id of the existing FloatingIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FloatingIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_floating_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip nutanix_floating_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FloatingIpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FloatingIpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_floating_ip',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._externalSubnetReferenceName = config.externalSubnetReferenceName;
    this._externalSubnetReferenceUuid = config.externalSubnetReferenceUuid;
    this._id = config.id;
    this._privateIp = config.privateIp;
    this._vmNicReferenceUuid = config.vmNicReferenceUuid;
    this._vpcReferenceName = config.vpcReferenceName;
    this._vpcReferenceUuid = config.vpcReferenceUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // external_subnet_reference_name - computed: false, optional: true, required: false
  private _externalSubnetReferenceName?: string; 
  public get externalSubnetReferenceName() {
    return this.getStringAttribute('external_subnet_reference_name');
  }
  public set externalSubnetReferenceName(value: string) {
    this._externalSubnetReferenceName = value;
  }
  public resetExternalSubnetReferenceName() {
    this._externalSubnetReferenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetReferenceNameInput() {
    return this._externalSubnetReferenceName;
  }

  // external_subnet_reference_uuid - computed: true, optional: true, required: false
  private _externalSubnetReferenceUuid?: string; 
  public get externalSubnetReferenceUuid() {
    return this.getStringAttribute('external_subnet_reference_uuid');
  }
  public set externalSubnetReferenceUuid(value: string) {
    this._externalSubnetReferenceUuid = value;
  }
  public resetExternalSubnetReferenceUuid() {
    this._externalSubnetReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetReferenceUuidInput() {
    return this._externalSubnetReferenceUuid;
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // vm_nic_reference_uuid - computed: false, optional: true, required: false
  private _vmNicReferenceUuid?: string; 
  public get vmNicReferenceUuid() {
    return this.getStringAttribute('vm_nic_reference_uuid');
  }
  public set vmNicReferenceUuid(value: string) {
    this._vmNicReferenceUuid = value;
  }
  public resetVmNicReferenceUuid() {
    this._vmNicReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNicReferenceUuidInput() {
    return this._vmNicReferenceUuid;
  }

  // vpc_reference_name - computed: false, optional: true, required: false
  private _vpcReferenceName?: string; 
  public get vpcReferenceName() {
    return this.getStringAttribute('vpc_reference_name');
  }
  public set vpcReferenceName(value: string) {
    this._vpcReferenceName = value;
  }
  public resetVpcReferenceName() {
    this._vpcReferenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceNameInput() {
    return this._vpcReferenceName;
  }

  // vpc_reference_uuid - computed: true, optional: true, required: false
  private _vpcReferenceUuid?: string; 
  public get vpcReferenceUuid() {
    return this.getStringAttribute('vpc_reference_uuid');
  }
  public set vpcReferenceUuid(value: string) {
    this._vpcReferenceUuid = value;
  }
  public resetVpcReferenceUuid() {
    this._vpcReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceUuidInput() {
    return this._vpcReferenceUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_version: cdktf.stringToTerraform(this._apiVersion),
      external_subnet_reference_name: cdktf.stringToTerraform(this._externalSubnetReferenceName),
      external_subnet_reference_uuid: cdktf.stringToTerraform(this._externalSubnetReferenceUuid),
      id: cdktf.stringToTerraform(this._id),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      vm_nic_reference_uuid: cdktf.stringToTerraform(this._vmNicReferenceUuid),
      vpc_reference_name: cdktf.stringToTerraform(this._vpcReferenceName),
      vpc_reference_uuid: cdktf.stringToTerraform(this._vpcReferenceUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_subnet_reference_name: {
        value: cdktf.stringToHclTerraform(this._externalSubnetReferenceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_subnet_reference_uuid: {
        value: cdktf.stringToHclTerraform(this._externalSubnetReferenceUuid),
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
      vm_nic_reference_uuid: {
        value: cdktf.stringToHclTerraform(this._vmNicReferenceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reference_name: {
        value: cdktf.stringToHclTerraform(this._vpcReferenceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reference_uuid: {
        value: cdktf.stringToHclTerraform(this._vpcReferenceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
