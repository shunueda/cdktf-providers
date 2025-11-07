// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommonLicenseManageBigiqConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the specified device is a managed/un-managed/un-reachable device 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#assignment_type CommonLicenseManageBigiq#assignment_type}
  */
  readonly assignmentType: string;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#bigiq_address CommonLicenseManageBigiq#bigiq_address}
  */
  readonly bigiqAddress: string;
  /**
  * Login reference for token authentication (see BIG-IQ REST docs for details)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#bigiq_login_ref CommonLicenseManageBigiq#bigiq_login_ref}
  */
  readonly bigiqLoginRef?: string;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#bigiq_password CommonLicenseManageBigiq#bigiq_password}
  */
  readonly bigiqPassword: string;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#bigiq_port CommonLicenseManageBigiq#bigiq_port}
  */
  readonly bigiqPort?: string;
  /**
  * Enable to use an external authentication source (LDAP, TACACS, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#bigiq_token_auth CommonLicenseManageBigiq#bigiq_token_auth}
  */
  readonly bigiqTokenAuth?: boolean | cdktf.IResolvable;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#bigiq_user CommonLicenseManageBigiq#bigiq_user}
  */
  readonly bigiqUser: string;
  /**
  * Status of Licence Assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#device_license_status CommonLicenseManageBigiq#device_license_status}
  */
  readonly deviceLicenseStatus?: string;
  /**
  * Aws/Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#hypervisor CommonLicenseManageBigiq#hypervisor}
  */
  readonly hypervisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#id CommonLicenseManageBigiq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The registration key that you want to assign from the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#key CommonLicenseManageBigiq#key}
  */
  readonly key?: string;
  /**
  * The registration key pool to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#license_poolname CommonLicenseManageBigiq#license_poolname}
  */
  readonly licensePoolname: string;
  /**
  * Sets the rate at which this license usage is billed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#mac_address CommonLicenseManageBigiq#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Sets the rate at which this license usage is billed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#skukeyword1 CommonLicenseManageBigiq#skukeyword1}
  */
  readonly skukeyword1?: string;
  /**
  * Sets the rate at which this license usage is billed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#skukeyword2 CommonLicenseManageBigiq#skukeyword2}
  */
  readonly skukeyword2?: string;
  /**
  * optional description for the assignment in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#tenant CommonLicenseManageBigiq#tenant}
  */
  readonly tenant?: string;
  /**
  * Sets the rate at which this license usage is billed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#unit_of_measure CommonLicenseManageBigiq#unit_of_measure}
  */
  readonly unitOfMeasure?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq bigip_common_license_manage_bigiq}
*/
export class CommonLicenseManageBigiq extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_common_license_manage_bigiq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CommonLicenseManageBigiq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CommonLicenseManageBigiq to import
  * @param importFromId The id of the existing CommonLicenseManageBigiq that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CommonLicenseManageBigiq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_common_license_manage_bigiq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/common_license_manage_bigiq bigip_common_license_manage_bigiq} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommonLicenseManageBigiqConfig
  */
  public constructor(scope: Construct, id: string, config: CommonLicenseManageBigiqConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_common_license_manage_bigiq',
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
    this._assignmentType = config.assignmentType;
    this._bigiqAddress = config.bigiqAddress;
    this._bigiqLoginRef = config.bigiqLoginRef;
    this._bigiqPassword = config.bigiqPassword;
    this._bigiqPort = config.bigiqPort;
    this._bigiqTokenAuth = config.bigiqTokenAuth;
    this._bigiqUser = config.bigiqUser;
    this._deviceLicenseStatus = config.deviceLicenseStatus;
    this._hypervisor = config.hypervisor;
    this._id = config.id;
    this._key = config.key;
    this._licensePoolname = config.licensePoolname;
    this._macAddress = config.macAddress;
    this._skukeyword1 = config.skukeyword1;
    this._skukeyword2 = config.skukeyword2;
    this._tenant = config.tenant;
    this._unitOfMeasure = config.unitOfMeasure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_type - computed: false, optional: false, required: true
  private _assignmentType?: string; 
  public get assignmentType() {
    return this.getStringAttribute('assignment_type');
  }
  public set assignmentType(value: string) {
    this._assignmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentTypeInput() {
    return this._assignmentType;
  }

  // bigiq_address - computed: false, optional: false, required: true
  private _bigiqAddress?: string; 
  public get bigiqAddress() {
    return this.getStringAttribute('bigiq_address');
  }
  public set bigiqAddress(value: string) {
    this._bigiqAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqAddressInput() {
    return this._bigiqAddress;
  }

  // bigiq_login_ref - computed: false, optional: true, required: false
  private _bigiqLoginRef?: string; 
  public get bigiqLoginRef() {
    return this.getStringAttribute('bigiq_login_ref');
  }
  public set bigiqLoginRef(value: string) {
    this._bigiqLoginRef = value;
  }
  public resetBigiqLoginRef() {
    this._bigiqLoginRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqLoginRefInput() {
    return this._bigiqLoginRef;
  }

  // bigiq_password - computed: false, optional: false, required: true
  private _bigiqPassword?: string; 
  public get bigiqPassword() {
    return this.getStringAttribute('bigiq_password');
  }
  public set bigiqPassword(value: string) {
    this._bigiqPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqPasswordInput() {
    return this._bigiqPassword;
  }

  // bigiq_port - computed: false, optional: true, required: false
  private _bigiqPort?: string; 
  public get bigiqPort() {
    return this.getStringAttribute('bigiq_port');
  }
  public set bigiqPort(value: string) {
    this._bigiqPort = value;
  }
  public resetBigiqPort() {
    this._bigiqPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqPortInput() {
    return this._bigiqPort;
  }

  // bigiq_token_auth - computed: false, optional: true, required: false
  private _bigiqTokenAuth?: boolean | cdktf.IResolvable; 
  public get bigiqTokenAuth() {
    return this.getBooleanAttribute('bigiq_token_auth');
  }
  public set bigiqTokenAuth(value: boolean | cdktf.IResolvable) {
    this._bigiqTokenAuth = value;
  }
  public resetBigiqTokenAuth() {
    this._bigiqTokenAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqTokenAuthInput() {
    return this._bigiqTokenAuth;
  }

  // bigiq_user - computed: false, optional: false, required: true
  private _bigiqUser?: string; 
  public get bigiqUser() {
    return this.getStringAttribute('bigiq_user');
  }
  public set bigiqUser(value: string) {
    this._bigiqUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqUserInput() {
    return this._bigiqUser;
  }

  // device_license_status - computed: true, optional: true, required: false
  private _deviceLicenseStatus?: string; 
  public get deviceLicenseStatus() {
    return this.getStringAttribute('device_license_status');
  }
  public set deviceLicenseStatus(value: string) {
    this._deviceLicenseStatus = value;
  }
  public resetDeviceLicenseStatus() {
    this._deviceLicenseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceLicenseStatusInput() {
    return this._deviceLicenseStatus;
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  public resetHypervisor() {
    this._hypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // license_poolname - computed: false, optional: false, required: true
  private _licensePoolname?: string; 
  public get licensePoolname() {
    return this.getStringAttribute('license_poolname');
  }
  public set licensePoolname(value: string) {
    this._licensePoolname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licensePoolnameInput() {
    return this._licensePoolname;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // skukeyword1 - computed: false, optional: true, required: false
  private _skukeyword1?: string; 
  public get skukeyword1() {
    return this.getStringAttribute('skukeyword1');
  }
  public set skukeyword1(value: string) {
    this._skukeyword1 = value;
  }
  public resetSkukeyword1() {
    this._skukeyword1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skukeyword1Input() {
    return this._skukeyword1;
  }

  // skukeyword2 - computed: false, optional: true, required: false
  private _skukeyword2?: string; 
  public get skukeyword2() {
    return this.getStringAttribute('skukeyword2');
  }
  public set skukeyword2(value: string) {
    this._skukeyword2 = value;
  }
  public resetSkukeyword2() {
    this._skukeyword2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skukeyword2Input() {
    return this._skukeyword2;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // unit_of_measure - computed: false, optional: true, required: false
  private _unitOfMeasure?: string; 
  public get unitOfMeasure() {
    return this.getStringAttribute('unit_of_measure');
  }
  public set unitOfMeasure(value: string) {
    this._unitOfMeasure = value;
  }
  public resetUnitOfMeasure() {
    this._unitOfMeasure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitOfMeasureInput() {
    return this._unitOfMeasure;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignment_type: cdktf.stringToTerraform(this._assignmentType),
      bigiq_address: cdktf.stringToTerraform(this._bigiqAddress),
      bigiq_login_ref: cdktf.stringToTerraform(this._bigiqLoginRef),
      bigiq_password: cdktf.stringToTerraform(this._bigiqPassword),
      bigiq_port: cdktf.stringToTerraform(this._bigiqPort),
      bigiq_token_auth: cdktf.booleanToTerraform(this._bigiqTokenAuth),
      bigiq_user: cdktf.stringToTerraform(this._bigiqUser),
      device_license_status: cdktf.stringToTerraform(this._deviceLicenseStatus),
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      license_poolname: cdktf.stringToTerraform(this._licensePoolname),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      skukeyword1: cdktf.stringToTerraform(this._skukeyword1),
      skukeyword2: cdktf.stringToTerraform(this._skukeyword2),
      tenant: cdktf.stringToTerraform(this._tenant),
      unit_of_measure: cdktf.stringToTerraform(this._unitOfMeasure),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_type: {
        value: cdktf.stringToHclTerraform(this._assignmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_address: {
        value: cdktf.stringToHclTerraform(this._bigiqAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_login_ref: {
        value: cdktf.stringToHclTerraform(this._bigiqLoginRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_password: {
        value: cdktf.stringToHclTerraform(this._bigiqPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_port: {
        value: cdktf.stringToHclTerraform(this._bigiqPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigiq_token_auth: {
        value: cdktf.booleanToHclTerraform(this._bigiqTokenAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bigiq_user: {
        value: cdktf.stringToHclTerraform(this._bigiqUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_license_status: {
        value: cdktf.stringToHclTerraform(this._deviceLicenseStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor: {
        value: cdktf.stringToHclTerraform(this._hypervisor),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_poolname: {
        value: cdktf.stringToHclTerraform(this._licensePoolname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skukeyword1: {
        value: cdktf.stringToHclTerraform(this._skukeyword1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skukeyword2: {
        value: cdktf.stringToHclTerraform(this._skukeyword2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_of_measure: {
        value: cdktf.stringToHclTerraform(this._unitOfMeasure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
