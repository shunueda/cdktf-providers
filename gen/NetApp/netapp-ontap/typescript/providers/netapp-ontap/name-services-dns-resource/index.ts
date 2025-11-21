// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NameServicesDnsResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource#cx_profile_name NameServicesDnsResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * List of DNS domains such as 'sales.bar.com'. The first domain is the one that the svm belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource#dns_domains NameServicesDnsResource#dns_domains}
  */
  readonly dnsDomains?: string[];
  /**
  * List of IPv4 addresses of name servers such as '123.123.123.123'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource#name_servers NameServicesDnsResource#name_servers}
  */
  readonly nameServers?: string[];
  /**
  * Indicates whether or not the validation for the specified DNS configuration is disabled. (9.9)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource#skip_config_validation NameServicesDnsResource#skip_config_validation}
  */
  readonly skipConfigValidation?: boolean | cdktf.IResolvable;
  /**
  * IPInterface svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource#svm_name NameServicesDnsResource#svm_name}
  */
  readonly svmName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource netapp-ontap_name_services_dns_resource}
*/
export class NameServicesDnsResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_name_services_dns_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NameServicesDnsResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NameServicesDnsResource to import
  * @param importFromId The id of the existing NameServicesDnsResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NameServicesDnsResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_name_services_dns_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/name_services_dns_resource netapp-ontap_name_services_dns_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NameServicesDnsResourceConfig
  */
  public constructor(scope: Construct, id: string, config: NameServicesDnsResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_name_services_dns_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._dnsDomains = config.dnsDomains;
    this._nameServers = config.nameServers;
    this._skipConfigValidation = config.skipConfigValidation;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // dns_domains - computed: false, optional: true, required: false
  private _dnsDomains?: string[]; 
  public get dnsDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_domains'));
  }
  public set dnsDomains(value: string[]) {
    this._dnsDomains = value;
  }
  public resetDnsDomains() {
    this._dnsDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainsInput() {
    return this._dnsDomains;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_servers - computed: false, optional: true, required: false
  private _nameServers?: string[]; 
  public get nameServers() {
    return cdktf.Fn.tolist(this.getListAttribute('name_servers'));
  }
  public set nameServers(value: string[]) {
    this._nameServers = value;
  }
  public resetNameServers() {
    this._nameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // skip_config_validation - computed: true, optional: true, required: false
  private _skipConfigValidation?: boolean | cdktf.IResolvable; 
  public get skipConfigValidation() {
    return this.getBooleanAttribute('skip_config_validation');
  }
  public set skipConfigValidation(value: boolean | cdktf.IResolvable) {
    this._skipConfigValidation = value;
  }
  public resetSkipConfigValidation() {
    this._skipConfigValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConfigValidationInput() {
    return this._skipConfigValidation;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      dns_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsDomains),
      name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameServers),
      skip_config_validation: cdktf.booleanToTerraform(this._skipConfigValidation),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      skip_config_validation: {
        value: cdktf.booleanToHclTerraform(this._skipConfigValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
