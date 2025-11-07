// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/system_services_web__management_https_system__generated__certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemServicesWebManagementHttpsSystemGeneratedCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/system_services_web__management_https_system__generated__certificate#id SystemServicesWebManagementHttpsSystemGeneratedCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/system_services_web__management_https_system__generated__certificate#resource_name SystemServicesWebManagementHttpsSystemGeneratedCertificate#resource_name}
  */
  readonly resourceName: string;
  /**
  * xpath is: config.Groups.V_https. X.509 certificate generated automatically by system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/system_services_web__management_https_system__generated__certificate#system__generated__certificate SystemServicesWebManagementHttpsSystemGeneratedCertificate#system__generated__certificate}
  */
  readonly systemGeneratedCertificate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/system_services_web__management_https_system__generated__certificate junos-vsrx_SystemServicesWeb__ManagementHttpsSystem__Generated__Certificate}
*/
export class SystemServicesWebManagementHttpsSystemGeneratedCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_SystemServicesWeb__ManagementHttpsSystem__Generated__Certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemServicesWebManagementHttpsSystemGeneratedCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemServicesWebManagementHttpsSystemGeneratedCertificate to import
  * @param importFromId The id of the existing SystemServicesWebManagementHttpsSystemGeneratedCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/system_services_web__management_https_system__generated__certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemServicesWebManagementHttpsSystemGeneratedCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_SystemServicesWeb__ManagementHttpsSystem__Generated__Certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/system_services_web__management_https_system__generated__certificate junos-vsrx_SystemServicesWeb__ManagementHttpsSystem__Generated__Certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemServicesWebManagementHttpsSystemGeneratedCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SystemServicesWebManagementHttpsSystemGeneratedCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_SystemServicesWeb__ManagementHttpsSystem__Generated__Certificate',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106'
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
    this._resourceName = config.resourceName;
    this._systemGeneratedCertificate = config.systemGeneratedCertificate;
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

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // system__generated__certificate - computed: false, optional: true, required: false
  private _systemGeneratedCertificate?: string; 
  public get systemGeneratedCertificate() {
    return this.getStringAttribute('system__generated__certificate');
  }
  public set systemGeneratedCertificate(value: string) {
    this._systemGeneratedCertificate = value;
  }
  public resetSystemGeneratedCertificate() {
    this._systemGeneratedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemGeneratedCertificateInput() {
    return this._systemGeneratedCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      system__generated__certificate: cdktf.stringToTerraform(this._systemGeneratedCertificate),
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
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system__generated__certificate: {
        value: cdktf.stringToHclTerraform(this._systemGeneratedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
