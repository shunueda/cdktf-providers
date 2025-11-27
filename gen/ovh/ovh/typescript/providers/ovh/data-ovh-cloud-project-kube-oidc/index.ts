// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhCloudProjectKubeOidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#client_id DataOvhCloudProjectKubeOidc#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#id DataOvhCloudProjectKubeOidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#issuer_url DataOvhCloudProjectKubeOidc#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * Kube ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#kube_id DataOvhCloudProjectKubeOidc#kube_id}
  */
  readonly kubeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#oidc_ca_content DataOvhCloudProjectKubeOidc#oidc_ca_content}
  */
  readonly oidcCaContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#oidc_groups_claim DataOvhCloudProjectKubeOidc#oidc_groups_claim}
  */
  readonly oidcGroupsClaim?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#oidc_groups_prefix DataOvhCloudProjectKubeOidc#oidc_groups_prefix}
  */
  readonly oidcGroupsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#oidc_required_claim DataOvhCloudProjectKubeOidc#oidc_required_claim}
  */
  readonly oidcRequiredClaim?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#oidc_signing_algs DataOvhCloudProjectKubeOidc#oidc_signing_algs}
  */
  readonly oidcSigningAlgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#oidc_username_claim DataOvhCloudProjectKubeOidc#oidc_username_claim}
  */
  readonly oidcUsernameClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#oidc_username_prefix DataOvhCloudProjectKubeOidc#oidc_username_prefix}
  */
  readonly oidcUsernamePrefix?: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#service_name DataOvhCloudProjectKubeOidc#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc ovh_cloud_project_kube_oidc}
*/
export class DataOvhCloudProjectKubeOidc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_kube_oidc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhCloudProjectKubeOidc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhCloudProjectKubeOidc to import
  * @param importFromId The id of the existing DataOvhCloudProjectKubeOidc that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhCloudProjectKubeOidc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_kube_oidc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/cloud_project_kube_oidc ovh_cloud_project_kube_oidc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhCloudProjectKubeOidcConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhCloudProjectKubeOidcConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_kube_oidc',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._id = config.id;
    this._issuerUrl = config.issuerUrl;
    this._kubeId = config.kubeId;
    this._oidcCaContent = config.oidcCaContent;
    this._oidcGroupsClaim = config.oidcGroupsClaim;
    this._oidcGroupsPrefix = config.oidcGroupsPrefix;
    this._oidcRequiredClaim = config.oidcRequiredClaim;
    this._oidcSigningAlgs = config.oidcSigningAlgs;
    this._oidcUsernameClaim = config.oidcUsernameClaim;
    this._oidcUsernamePrefix = config.oidcUsernamePrefix;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // kube_id - computed: false, optional: false, required: true
  private _kubeId?: string; 
  public get kubeId() {
    return this.getStringAttribute('kube_id');
  }
  public set kubeId(value: string) {
    this._kubeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeIdInput() {
    return this._kubeId;
  }

  // oidc_ca_content - computed: false, optional: true, required: false
  private _oidcCaContent?: string; 
  public get oidcCaContent() {
    return this.getStringAttribute('oidc_ca_content');
  }
  public set oidcCaContent(value: string) {
    this._oidcCaContent = value;
  }
  public resetOidcCaContent() {
    this._oidcCaContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcCaContentInput() {
    return this._oidcCaContent;
  }

  // oidc_groups_claim - computed: false, optional: true, required: false
  private _oidcGroupsClaim?: string[]; 
  public get oidcGroupsClaim() {
    return this.getListAttribute('oidc_groups_claim');
  }
  public set oidcGroupsClaim(value: string[]) {
    this._oidcGroupsClaim = value;
  }
  public resetOidcGroupsClaim() {
    this._oidcGroupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupsClaimInput() {
    return this._oidcGroupsClaim;
  }

  // oidc_groups_prefix - computed: false, optional: true, required: false
  private _oidcGroupsPrefix?: string; 
  public get oidcGroupsPrefix() {
    return this.getStringAttribute('oidc_groups_prefix');
  }
  public set oidcGroupsPrefix(value: string) {
    this._oidcGroupsPrefix = value;
  }
  public resetOidcGroupsPrefix() {
    this._oidcGroupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupsPrefixInput() {
    return this._oidcGroupsPrefix;
  }

  // oidc_required_claim - computed: false, optional: true, required: false
  private _oidcRequiredClaim?: string[]; 
  public get oidcRequiredClaim() {
    return this.getListAttribute('oidc_required_claim');
  }
  public set oidcRequiredClaim(value: string[]) {
    this._oidcRequiredClaim = value;
  }
  public resetOidcRequiredClaim() {
    this._oidcRequiredClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequiredClaimInput() {
    return this._oidcRequiredClaim;
  }

  // oidc_signing_algs - computed: false, optional: true, required: false
  private _oidcSigningAlgs?: string[]; 
  public get oidcSigningAlgs() {
    return this.getListAttribute('oidc_signing_algs');
  }
  public set oidcSigningAlgs(value: string[]) {
    this._oidcSigningAlgs = value;
  }
  public resetOidcSigningAlgs() {
    this._oidcSigningAlgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcSigningAlgsInput() {
    return this._oidcSigningAlgs;
  }

  // oidc_username_claim - computed: false, optional: true, required: false
  private _oidcUsernameClaim?: string; 
  public get oidcUsernameClaim() {
    return this.getStringAttribute('oidc_username_claim');
  }
  public set oidcUsernameClaim(value: string) {
    this._oidcUsernameClaim = value;
  }
  public resetOidcUsernameClaim() {
    this._oidcUsernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcUsernameClaimInput() {
    return this._oidcUsernameClaim;
  }

  // oidc_username_prefix - computed: false, optional: true, required: false
  private _oidcUsernamePrefix?: string; 
  public get oidcUsernamePrefix() {
    return this.getStringAttribute('oidc_username_prefix');
  }
  public set oidcUsernamePrefix(value: string) {
    this._oidcUsernamePrefix = value;
  }
  public resetOidcUsernamePrefix() {
    this._oidcUsernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcUsernamePrefixInput() {
    return this._oidcUsernamePrefix;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      kube_id: cdktf.stringToTerraform(this._kubeId),
      oidc_ca_content: cdktf.stringToTerraform(this._oidcCaContent),
      oidc_groups_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oidcGroupsClaim),
      oidc_groups_prefix: cdktf.stringToTerraform(this._oidcGroupsPrefix),
      oidc_required_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oidcRequiredClaim),
      oidc_signing_algs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oidcSigningAlgs),
      oidc_username_claim: cdktf.stringToTerraform(this._oidcUsernameClaim),
      oidc_username_prefix: cdktf.stringToTerraform(this._oidcUsernamePrefix),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kube_id: {
        value: cdktf.stringToHclTerraform(this._kubeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_ca_content: {
        value: cdktf.stringToHclTerraform(this._oidcCaContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_groups_claim: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oidcGroupsClaim),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oidc_groups_prefix: {
        value: cdktf.stringToHclTerraform(this._oidcGroupsPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_required_claim: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oidcRequiredClaim),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oidc_signing_algs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oidcSigningAlgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oidc_username_claim: {
        value: cdktf.stringToHclTerraform(this._oidcUsernameClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_username_prefix: {
        value: cdktf.stringToHclTerraform(this._oidcUsernamePrefix),
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
