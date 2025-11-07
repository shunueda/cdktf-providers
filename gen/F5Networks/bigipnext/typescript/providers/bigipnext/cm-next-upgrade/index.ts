// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmNextUpgradeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the BIG-IP Next image file that is to be used to upgrade the BIG-IP Next instance, in case the upgrade_type is 'appliance' the value should be the name of the image file that is present on the Velos partition or rSeries with with the BIG-IP Next instance is to be upgraded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#image_name CmNextUpgrade#image_name}
  */
  readonly imageName: string;
  /**
  * The IP address of the BIG-IP Next instance that is to be upgraded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#next_instance_ip CmNextUpgrade#next_instance_ip}
  */
  readonly nextInstanceIp: string;
  /**
  * The IP address of the Velos partition or rSeries on which the BIG-IP Next instance is to be upgraded, it is required when upgrade_type is 'appliance'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#partition_address CmNextUpgrade#partition_address}
  */
  readonly partitionAddress?: string;
  /**
  * The password of the Velos partition or rSeries on which the BIG-IP Next instance is to be upgraded, it is required when upgrade_type is 'appliance'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#partition_password CmNextUpgrade#partition_password}
  */
  readonly partitionPassword?: string;
  /**
  * The port number of the Velos partition or rSeries on which the BIG-IP Next instance is to be upgraded, it is required when upgrade_type is 'appliance'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#partition_port CmNextUpgrade#partition_port}
  */
  readonly partitionPort?: number;
  /**
  * The username of the Velos partition or rSeries on which the BIG-IP Next instance is to be upgraded, it is required when upgrade_type is 'appliance'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#partition_username CmNextUpgrade#partition_username}
  */
  readonly partitionUsername?: string;
  /**
  * The name of the signature file that is to be used to verify the image file, it is required when upgrade_type is 've'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#signature_filename CmNextUpgrade#signature_filename}
  */
  readonly signatureFilename?: string;
  /**
  * The name of the BIG-IP Next tenant that is to be upgraded, it is required when upgrade_type is 'appliance'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#tenant_name CmNextUpgrade#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * The time in seconds to wait for the upgrade process to complete, the default value is 300 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#timeout CmNextUpgrade#timeout}
  */
  readonly timeout?: number;
  /**
  * The type of upgrade that is to be performed, it can be either 've' or 'appliance'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#upgrade_type CmNextUpgrade#upgrade_type}
  */
  readonly upgradeType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade bigipnext_cm_next_upgrade}
*/
export class CmNextUpgrade extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_next_upgrade";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmNextUpgrade resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmNextUpgrade to import
  * @param importFromId The id of the existing CmNextUpgrade that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmNextUpgrade to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_next_upgrade", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_upgrade bigipnext_cm_next_upgrade} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmNextUpgradeConfig
  */
  public constructor(scope: Construct, id: string, config: CmNextUpgradeConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_next_upgrade',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._imageName = config.imageName;
    this._nextInstanceIp = config.nextInstanceIp;
    this._partitionAddress = config.partitionAddress;
    this._partitionPassword = config.partitionPassword;
    this._partitionPort = config.partitionPort;
    this._partitionUsername = config.partitionUsername;
    this._signatureFilename = config.signatureFilename;
    this._tenantName = config.tenantName;
    this._timeout = config.timeout;
    this._upgradeType = config.upgradeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // next_instance_ip - computed: false, optional: false, required: true
  private _nextInstanceIp?: string; 
  public get nextInstanceIp() {
    return this.getStringAttribute('next_instance_ip');
  }
  public set nextInstanceIp(value: string) {
    this._nextInstanceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInstanceIpInput() {
    return this._nextInstanceIp;
  }

  // partition_address - computed: false, optional: true, required: false
  private _partitionAddress?: string; 
  public get partitionAddress() {
    return this.getStringAttribute('partition_address');
  }
  public set partitionAddress(value: string) {
    this._partitionAddress = value;
  }
  public resetPartitionAddress() {
    this._partitionAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionAddressInput() {
    return this._partitionAddress;
  }

  // partition_password - computed: false, optional: true, required: false
  private _partitionPassword?: string; 
  public get partitionPassword() {
    return this.getStringAttribute('partition_password');
  }
  public set partitionPassword(value: string) {
    this._partitionPassword = value;
  }
  public resetPartitionPassword() {
    this._partitionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionPasswordInput() {
    return this._partitionPassword;
  }

  // partition_port - computed: false, optional: true, required: false
  private _partitionPort?: number; 
  public get partitionPort() {
    return this.getNumberAttribute('partition_port');
  }
  public set partitionPort(value: number) {
    this._partitionPort = value;
  }
  public resetPartitionPort() {
    this._partitionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionPortInput() {
    return this._partitionPort;
  }

  // partition_username - computed: false, optional: true, required: false
  private _partitionUsername?: string; 
  public get partitionUsername() {
    return this.getStringAttribute('partition_username');
  }
  public set partitionUsername(value: string) {
    this._partitionUsername = value;
  }
  public resetPartitionUsername() {
    this._partitionUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionUsernameInput() {
    return this._partitionUsername;
  }

  // signature_filename - computed: false, optional: true, required: false
  private _signatureFilename?: string; 
  public get signatureFilename() {
    return this.getStringAttribute('signature_filename');
  }
  public set signatureFilename(value: string) {
    this._signatureFilename = value;
  }
  public resetSignatureFilename() {
    this._signatureFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureFilenameInput() {
    return this._signatureFilename;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // upgrade_type - computed: false, optional: false, required: true
  private _upgradeType?: string; 
  public get upgradeType() {
    return this.getStringAttribute('upgrade_type');
  }
  public set upgradeType(value: string) {
    this._upgradeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypeInput() {
    return this._upgradeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_name: cdktf.stringToTerraform(this._imageName),
      next_instance_ip: cdktf.stringToTerraform(this._nextInstanceIp),
      partition_address: cdktf.stringToTerraform(this._partitionAddress),
      partition_password: cdktf.stringToTerraform(this._partitionPassword),
      partition_port: cdktf.numberToTerraform(this._partitionPort),
      partition_username: cdktf.stringToTerraform(this._partitionUsername),
      signature_filename: cdktf.stringToTerraform(this._signatureFilename),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      timeout: cdktf.numberToTerraform(this._timeout),
      upgrade_type: cdktf.stringToTerraform(this._upgradeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_instance_ip: {
        value: cdktf.stringToHclTerraform(this._nextInstanceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_address: {
        value: cdktf.stringToHclTerraform(this._partitionAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_password: {
        value: cdktf.stringToHclTerraform(this._partitionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_port: {
        value: cdktf.numberToHclTerraform(this._partitionPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partition_username: {
        value: cdktf.stringToHclTerraform(this._partitionUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_filename: {
        value: cdktf.stringToHclTerraform(this._signatureFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_type: {
        value: cdktf.stringToHclTerraform(this._upgradeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
