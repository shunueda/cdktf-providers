// generated from terraform resource schema

import { DataAviApplicationprofileConfigpbAttributesList, 
DataAviApplicationprofileDnsServiceProfileList, 
DataAviApplicationprofileDosRlProfileList, 
DataAviApplicationprofileHttpProfileList, 
DataAviApplicationprofileL4SslProfileList, 
DataAviApplicationprofileMarkersList, 
DataAviApplicationprofileSipServiceProfileList, 
DataAviApplicationprofileTcpAppProfileList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAviApplicationprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/applicationprofile#id DataAviApplicationprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/applicationprofile#name DataAviApplicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/applicationprofile#tenant_ref DataAviApplicationprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/applicationprofile#uuid DataAviApplicationprofile#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/applicationprofile avi_applicationprofile}
*/
export class DataAviApplicationprofile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_applicationprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviApplicationprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviApplicationprofile to import
  * @param importFromId The id of the existing DataAviApplicationprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/applicationprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviApplicationprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_applicationprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/applicationprofile avi_applicationprofile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviApplicationprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviApplicationprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_applicationprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
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
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_type - computed: true, optional: false, required: false
  public get appServiceType() {
    return this.getStringAttribute('app_service_type');
  }

  // cloud_config_cksum - computed: true, optional: false, required: false
  public get cloudConfigCksum() {
    return this.getStringAttribute('cloud_config_cksum');
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviApplicationprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_service_profile - computed: true, optional: false, required: false
  private _dnsServiceProfile = new DataAviApplicationprofileDnsServiceProfileList(this, "dns_service_profile", true);
  public get dnsServiceProfile() {
    return this._dnsServiceProfile;
  }

  // dos_rl_profile - computed: true, optional: false, required: false
  private _dosRlProfile = new DataAviApplicationprofileDosRlProfileList(this, "dos_rl_profile", true);
  public get dosRlProfile() {
    return this._dosRlProfile;
  }

  // http_profile - computed: true, optional: false, required: false
  private _httpProfile = new DataAviApplicationprofileHttpProfileList(this, "http_profile", true);
  public get httpProfile() {
    return this._httpProfile;
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

  // l4_ssl_profile - computed: true, optional: false, required: false
  private _l4SslProfile = new DataAviApplicationprofileL4SslProfileList(this, "l4_ssl_profile", true);
  public get l4SslProfile() {
    return this._l4SslProfile;
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new DataAviApplicationprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preserve_client_ip - computed: true, optional: false, required: false
  public get preserveClientIp() {
    return this.getStringAttribute('preserve_client_ip');
  }

  // preserve_client_port - computed: true, optional: false, required: false
  public get preserveClientPort() {
    return this.getStringAttribute('preserve_client_port');
  }

  // preserve_dest_ip_port - computed: true, optional: false, required: false
  public get preserveDestIpPort() {
    return this.getStringAttribute('preserve_dest_ip_port');
  }

  // sip_service_profile - computed: true, optional: false, required: false
  private _sipServiceProfile = new DataAviApplicationprofileSipServiceProfileList(this, "sip_service_profile", true);
  public get sipServiceProfile() {
    return this._sipServiceProfile;
  }

  // tcp_app_profile - computed: true, optional: false, required: false
  private _tcpAppProfile = new DataAviApplicationprofileTcpAppProfileList(this, "tcp_app_profile", true);
  public get tcpAppProfile() {
    return this._tcpAppProfile;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
