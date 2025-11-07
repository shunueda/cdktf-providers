// https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#auto_sbom_generation Project#auto_sbom_generation}
  */
  readonly autoSbomGeneration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#cve_allowlist Project#cve_allowlist}
  */
  readonly cveAllowlist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#deployment_security Project#deployment_security}
  */
  readonly deploymentSecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#enable_content_trust Project#enable_content_trust}
  */
  readonly enableContentTrust?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#enable_content_trust_cosign Project#enable_content_trust_cosign}
  */
  readonly enableContentTrustCosign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#force_destroy Project#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#public Project#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#registry_id Project#registry_id}
  */
  readonly registryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#storage_quota Project#storage_quota}
  */
  readonly storageQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#vulnerability_scanning Project#vulnerability_scanning}
  */
  readonly vulnerabilityScanning?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project harbor_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project harbor_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_project',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSbomGeneration = config.autoSbomGeneration;
    this._cveAllowlist = config.cveAllowlist;
    this._deploymentSecurity = config.deploymentSecurity;
    this._enableContentTrust = config.enableContentTrust;
    this._enableContentTrustCosign = config.enableContentTrustCosign;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._name = config.name;
    this._public = config.public;
    this._registryId = config.registryId;
    this._storageQuota = config.storageQuota;
    this._vulnerabilityScanning = config.vulnerabilityScanning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_sbom_generation - computed: false, optional: true, required: false
  private _autoSbomGeneration?: boolean | cdktf.IResolvable; 
  public get autoSbomGeneration() {
    return this.getBooleanAttribute('auto_sbom_generation');
  }
  public set autoSbomGeneration(value: boolean | cdktf.IResolvable) {
    this._autoSbomGeneration = value;
  }
  public resetAutoSbomGeneration() {
    this._autoSbomGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSbomGenerationInput() {
    return this._autoSbomGeneration;
  }

  // cve_allowlist - computed: false, optional: true, required: false
  private _cveAllowlist?: string[]; 
  public get cveAllowlist() {
    return this.getListAttribute('cve_allowlist');
  }
  public set cveAllowlist(value: string[]) {
    this._cveAllowlist = value;
  }
  public resetCveAllowlist() {
    this._cveAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveAllowlistInput() {
    return this._cveAllowlist;
  }

  // deployment_security - computed: false, optional: true, required: false
  private _deploymentSecurity?: string; 
  public get deploymentSecurity() {
    return this.getStringAttribute('deployment_security');
  }
  public set deploymentSecurity(value: string) {
    this._deploymentSecurity = value;
  }
  public resetDeploymentSecurity() {
    this._deploymentSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSecurityInput() {
    return this._deploymentSecurity;
  }

  // enable_content_trust - computed: false, optional: true, required: false
  private _enableContentTrust?: boolean | cdktf.IResolvable; 
  public get enableContentTrust() {
    return this.getBooleanAttribute('enable_content_trust');
  }
  public set enableContentTrust(value: boolean | cdktf.IResolvable) {
    this._enableContentTrust = value;
  }
  public resetEnableContentTrust() {
    this._enableContentTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContentTrustInput() {
    return this._enableContentTrust;
  }

  // enable_content_trust_cosign - computed: false, optional: true, required: false
  private _enableContentTrustCosign?: boolean | cdktf.IResolvable; 
  public get enableContentTrustCosign() {
    return this.getBooleanAttribute('enable_content_trust_cosign');
  }
  public set enableContentTrustCosign(value: boolean | cdktf.IResolvable) {
    this._enableContentTrustCosign = value;
  }
  public resetEnableContentTrustCosign() {
    this._enableContentTrustCosign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContentTrustCosignInput() {
    return this._enableContentTrustCosign;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // registry_id - computed: true, optional: true, required: false
  private _registryId?: number; 
  public get registryId() {
    return this.getNumberAttribute('registry_id');
  }
  public set registryId(value: number) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // storage_quota - computed: false, optional: true, required: false
  private _storageQuota?: number; 
  public get storageQuota() {
    return this.getNumberAttribute('storage_quota');
  }
  public set storageQuota(value: number) {
    this._storageQuota = value;
  }
  public resetStorageQuota() {
    this._storageQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQuotaInput() {
    return this._storageQuota;
  }

  // vulnerability_scanning - computed: false, optional: true, required: false
  private _vulnerabilityScanning?: boolean | cdktf.IResolvable; 
  public get vulnerabilityScanning() {
    return this.getBooleanAttribute('vulnerability_scanning');
  }
  public set vulnerabilityScanning(value: boolean | cdktf.IResolvable) {
    this._vulnerabilityScanning = value;
  }
  public resetVulnerabilityScanning() {
    this._vulnerabilityScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityScanningInput() {
    return this._vulnerabilityScanning;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_sbom_generation: cdktf.booleanToTerraform(this._autoSbomGeneration),
      cve_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cveAllowlist),
      deployment_security: cdktf.stringToTerraform(this._deploymentSecurity),
      enable_content_trust: cdktf.booleanToTerraform(this._enableContentTrust),
      enable_content_trust_cosign: cdktf.booleanToTerraform(this._enableContentTrustCosign),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      public: cdktf.booleanToTerraform(this._public),
      registry_id: cdktf.numberToTerraform(this._registryId),
      storage_quota: cdktf.numberToTerraform(this._storageQuota),
      vulnerability_scanning: cdktf.booleanToTerraform(this._vulnerabilityScanning),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_sbom_generation: {
        value: cdktf.booleanToHclTerraform(this._autoSbomGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cve_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cveAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deployment_security: {
        value: cdktf.stringToHclTerraform(this._deploymentSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_content_trust: {
        value: cdktf.booleanToHclTerraform(this._enableContentTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_content_trust_cosign: {
        value: cdktf.booleanToHclTerraform(this._enableContentTrustCosign),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registry_id: {
        value: cdktf.numberToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_quota: {
        value: cdktf.numberToHclTerraform(this._storageQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vulnerability_scanning: {
        value: cdktf.booleanToHclTerraform(this._vulnerabilityScanning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
