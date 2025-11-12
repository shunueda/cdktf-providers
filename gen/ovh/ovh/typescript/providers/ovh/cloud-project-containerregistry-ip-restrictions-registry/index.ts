// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_ip_restrictions_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectContainerregistryIpRestrictionsRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_ip_restrictions_registry#id CloudProjectContainerregistryIpRestrictionsRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List your IP restrictions applied on artifact manager component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_ip_restrictions_registry#ip_restrictions CloudProjectContainerregistryIpRestrictionsRegistry#ip_restrictions}
  */
  readonly ipRestrictions: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * RegistryID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_ip_restrictions_registry#registry_id CloudProjectContainerregistryIpRestrictionsRegistry#registry_id}
  */
  readonly registryId: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_ip_restrictions_registry#service_name CloudProjectContainerregistryIpRestrictionsRegistry#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_ip_restrictions_registry ovh_cloud_project_containerregistry_ip_restrictions_registry}
*/
export class CloudProjectContainerregistryIpRestrictionsRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_containerregistry_ip_restrictions_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectContainerregistryIpRestrictionsRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectContainerregistryIpRestrictionsRegistry to import
  * @param importFromId The id of the existing CloudProjectContainerregistryIpRestrictionsRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_ip_restrictions_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectContainerregistryIpRestrictionsRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_containerregistry_ip_restrictions_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_ip_restrictions_registry ovh_cloud_project_containerregistry_ip_restrictions_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectContainerregistryIpRestrictionsRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectContainerregistryIpRestrictionsRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_containerregistry_ip_restrictions_registry',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
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
    this._ipRestrictions = config.ipRestrictions;
    this._registryId = config.registryId;
    this._serviceName = config.serviceName;
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

  // ip_restrictions - computed: false, optional: false, required: true
  private _ipRestrictions?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get ipRestrictions() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ip_restrictions')));
  }
  public set ipRestrictions(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._ipRestrictions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionsInput() {
    return this._ipRestrictions;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_restrictions: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._ipRestrictions),
      registry_id: cdktf.stringToTerraform(this._registryId),
      service_name: cdktf.stringToTerraform(this._serviceName),
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
      ip_restrictions: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._ipRestrictions),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
