// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServicesMetaDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#action CloudServicesMetaData#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#id CloudServicesMetaData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prevents admin password from being changed if in YAML config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#prevent_admin_passwd CloudServicesMetaData#prevent_admin_passwd}
  */
  readonly preventAdminPasswd?: number;
  /**
  * Prevents admin ssh-key from being added if in YAML config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#prevent_admin_ssh_key CloudServicesMetaData#prevent_admin_ssh_key}
  */
  readonly preventAdminSshKey?: number;
  /**
  * prevents use of meta-data to complete user_data configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#prevent_autofill CloudServicesMetaData#prevent_autofill}
  */
  readonly preventAutofill?: number;
  /**
  * Prevents a10_blob from loading in YAML config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#prevent_blob CloudServicesMetaData#prevent_blob}
  */
  readonly preventBlob?: number;
  /**
  * Prevents cloud-service configuration in YAML config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#prevent_cloud_service CloudServicesMetaData#prevent_cloud_service}
  */
  readonly preventCloudService?: number;
  /**
  * Prevents a10_license configuration in YAML config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#prevent_license CloudServicesMetaData#prevent_license}
  */
  readonly preventLicense?: number;
  /**
  * Prevents user from being added command is in user-data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#prevent_user_ops CloudServicesMetaData#prevent_user_ops}
  */
  readonly preventUserOps?: number;
  /**
  * Prevents a10_license configuration in YAML config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#prevent_webservice CloudServicesMetaData#prevent_webservice}
  */
  readonly preventWebservice?: number;
  /**
  * 'openstack': OpenStack user-data services;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#provider1 CloudServicesMetaData#provider1}
  */
  readonly provider1?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#uuid CloudServicesMetaData#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data thunder_cloud_services_meta_data}
*/
export class CloudServicesMetaData extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cloud_services_meta_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServicesMetaData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServicesMetaData to import
  * @param importFromId The id of the existing CloudServicesMetaData that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServicesMetaData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cloud_services_meta_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_meta_data thunder_cloud_services_meta_data} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServicesMetaDataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudServicesMetaDataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cloud_services_meta_data',
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
    this._action = config.action;
    this._id = config.id;
    this._preventAdminPasswd = config.preventAdminPasswd;
    this._preventAdminSshKey = config.preventAdminSshKey;
    this._preventAutofill = config.preventAutofill;
    this._preventBlob = config.preventBlob;
    this._preventCloudService = config.preventCloudService;
    this._preventLicense = config.preventLicense;
    this._preventUserOps = config.preventUserOps;
    this._preventWebservice = config.preventWebservice;
    this._provider1 = config.provider1;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // prevent_admin_passwd - computed: false, optional: true, required: false
  private _preventAdminPasswd?: number; 
  public get preventAdminPasswd() {
    return this.getNumberAttribute('prevent_admin_passwd');
  }
  public set preventAdminPasswd(value: number) {
    this._preventAdminPasswd = value;
  }
  public resetPreventAdminPasswd() {
    this._preventAdminPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventAdminPasswdInput() {
    return this._preventAdminPasswd;
  }

  // prevent_admin_ssh_key - computed: false, optional: true, required: false
  private _preventAdminSshKey?: number; 
  public get preventAdminSshKey() {
    return this.getNumberAttribute('prevent_admin_ssh_key');
  }
  public set preventAdminSshKey(value: number) {
    this._preventAdminSshKey = value;
  }
  public resetPreventAdminSshKey() {
    this._preventAdminSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventAdminSshKeyInput() {
    return this._preventAdminSshKey;
  }

  // prevent_autofill - computed: false, optional: true, required: false
  private _preventAutofill?: number; 
  public get preventAutofill() {
    return this.getNumberAttribute('prevent_autofill');
  }
  public set preventAutofill(value: number) {
    this._preventAutofill = value;
  }
  public resetPreventAutofill() {
    this._preventAutofill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventAutofillInput() {
    return this._preventAutofill;
  }

  // prevent_blob - computed: false, optional: true, required: false
  private _preventBlob?: number; 
  public get preventBlob() {
    return this.getNumberAttribute('prevent_blob');
  }
  public set preventBlob(value: number) {
    this._preventBlob = value;
  }
  public resetPreventBlob() {
    this._preventBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventBlobInput() {
    return this._preventBlob;
  }

  // prevent_cloud_service - computed: false, optional: true, required: false
  private _preventCloudService?: number; 
  public get preventCloudService() {
    return this.getNumberAttribute('prevent_cloud_service');
  }
  public set preventCloudService(value: number) {
    this._preventCloudService = value;
  }
  public resetPreventCloudService() {
    this._preventCloudService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventCloudServiceInput() {
    return this._preventCloudService;
  }

  // prevent_license - computed: false, optional: true, required: false
  private _preventLicense?: number; 
  public get preventLicense() {
    return this.getNumberAttribute('prevent_license');
  }
  public set preventLicense(value: number) {
    this._preventLicense = value;
  }
  public resetPreventLicense() {
    this._preventLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventLicenseInput() {
    return this._preventLicense;
  }

  // prevent_user_ops - computed: false, optional: true, required: false
  private _preventUserOps?: number; 
  public get preventUserOps() {
    return this.getNumberAttribute('prevent_user_ops');
  }
  public set preventUserOps(value: number) {
    this._preventUserOps = value;
  }
  public resetPreventUserOps() {
    this._preventUserOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUserOpsInput() {
    return this._preventUserOps;
  }

  // prevent_webservice - computed: false, optional: true, required: false
  private _preventWebservice?: number; 
  public get preventWebservice() {
    return this.getNumberAttribute('prevent_webservice');
  }
  public set preventWebservice(value: number) {
    this._preventWebservice = value;
  }
  public resetPreventWebservice() {
    this._preventWebservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventWebserviceInput() {
    return this._preventWebservice;
  }

  // provider1 - computed: false, optional: true, required: false
  private _provider1?: string; 
  public get provider1() {
    return this.getStringAttribute('provider1');
  }
  public set provider1(value: string) {
    this._provider1 = value;
  }
  public resetProvider1() {
    this._provider1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provider1Input() {
    return this._provider1;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      prevent_admin_passwd: cdktf.numberToTerraform(this._preventAdminPasswd),
      prevent_admin_ssh_key: cdktf.numberToTerraform(this._preventAdminSshKey),
      prevent_autofill: cdktf.numberToTerraform(this._preventAutofill),
      prevent_blob: cdktf.numberToTerraform(this._preventBlob),
      prevent_cloud_service: cdktf.numberToTerraform(this._preventCloudService),
      prevent_license: cdktf.numberToTerraform(this._preventLicense),
      prevent_user_ops: cdktf.numberToTerraform(this._preventUserOps),
      prevent_webservice: cdktf.numberToTerraform(this._preventWebservice),
      provider1: cdktf.stringToTerraform(this._provider1),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      prevent_admin_passwd: {
        value: cdktf.numberToHclTerraform(this._preventAdminPasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prevent_admin_ssh_key: {
        value: cdktf.numberToHclTerraform(this._preventAdminSshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prevent_autofill: {
        value: cdktf.numberToHclTerraform(this._preventAutofill),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prevent_blob: {
        value: cdktf.numberToHclTerraform(this._preventBlob),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prevent_cloud_service: {
        value: cdktf.numberToHclTerraform(this._preventCloudService),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prevent_license: {
        value: cdktf.numberToHclTerraform(this._preventLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prevent_user_ops: {
        value: cdktf.numberToHclTerraform(this._preventUserOps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prevent_webservice: {
        value: cdktf.numberToHclTerraform(this._preventWebservice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider1: {
        value: cdktf.stringToHclTerraform(this._provider1),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
