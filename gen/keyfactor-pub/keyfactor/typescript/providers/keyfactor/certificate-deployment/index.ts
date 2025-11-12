// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string providing an alias to be used for the certificate upon entry into the certificate store. The function of the alias varies depending on the certificate store type. Please ensure that the alias is lowercase, or problems can arise in Terraform Plan. If not provided deployment validation will be done by Command certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#certificate_alias CertificateDeployment#certificate_alias}
  */
  readonly certificateAlias?: string;
  /**
  * Keyfactor certificate ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#certificate_id CertificateDeployment#certificate_id}
  */
  readonly certificateId: number;
  /**
  * A string containing the GUID for the certificate store to which the certificate should be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#certificate_store_id CertificateDeployment#certificate_store_id}
  */
  readonly certificateStoreId: string;
  /**
  * A map of entry parameters to be passed to the deployment job. These will only be used if the orchestrator extension supports them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#job_parameters CertificateDeployment#job_parameters}
  */
  readonly jobParameters?: { [key: string]: string };
  /**
  * Password that protects PFX certificate, if the certificate was enrolled using PFX enrollment, or is password protected in general. This value cannot change, and Terraform will throw an error if a change is attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#key_password CertificateDeployment#key_password}
  */
  readonly keyPassword?: string;
  /**
  * If set to `true`, updating the `certificate_id` to a different certificate will overwrite the existing certificate in the store. If set to `false` or not set, updating the `certificate_id` will cause the resource to be replaced, and the existing certificate will be removed from the store before the new certificate is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#overwrite CertificateDeployment#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * If true, the certificate will be redeployed to the store. If false, the certificate will be deployed only if it is not already deployed to the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#redeploy CertificateDeployment#redeploy}
  */
  readonly redeploy?: boolean | cdktf.IResolvable;
  /**
  * If set to `true`, deleting the resource will not remove the certificate from the store. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#skip_removal CertificateDeployment#skip_removal}
  */
  readonly skipRemoval?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment keyfactor_certificate_deployment}
*/
export class CertificateDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_certificate_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateDeployment to import
  * @param importFromId The id of the existing CertificateDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_certificate_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_deployment keyfactor_certificate_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_certificate_deployment',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateAlias = config.certificateAlias;
    this._certificateId = config.certificateId;
    this._certificateStoreId = config.certificateStoreId;
    this._jobParameters = config.jobParameters;
    this._keyPassword = config.keyPassword;
    this._overwrite = config.overwrite;
    this._redeploy = config.redeploy;
    this._skipRemoval = config.skipRemoval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_alias - computed: false, optional: true, required: false
  private _certificateAlias?: string; 
  public get certificateAlias() {
    return this.getStringAttribute('certificate_alias');
  }
  public set certificateAlias(value: string) {
    this._certificateAlias = value;
  }
  public resetCertificateAlias() {
    this._certificateAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAliasInput() {
    return this._certificateAlias;
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: number; 
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_store_id - computed: false, optional: false, required: true
  private _certificateStoreId?: string; 
  public get certificateStoreId() {
    return this.getStringAttribute('certificate_store_id');
  }
  public set certificateStoreId(value: string) {
    this._certificateStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreIdInput() {
    return this._certificateStoreId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_parameters - computed: false, optional: true, required: false
  private _jobParameters?: { [key: string]: string }; 
  public get jobParameters() {
    return this.getStringMapAttribute('job_parameters');
  }
  public set jobParameters(value: { [key: string]: string }) {
    this._jobParameters = value;
  }
  public resetJobParameters() {
    this._jobParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobParametersInput() {
    return this._jobParameters;
  }

  // key_password - computed: false, optional: true, required: false
  private _keyPassword?: string; 
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }
  public set keyPassword(value: string) {
    this._keyPassword = value;
  }
  public resetKeyPassword() {
    this._keyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordInput() {
    return this._keyPassword;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // redeploy - computed: false, optional: true, required: false
  private _redeploy?: boolean | cdktf.IResolvable; 
  public get redeploy() {
    return this.getBooleanAttribute('redeploy');
  }
  public set redeploy(value: boolean | cdktf.IResolvable) {
    this._redeploy = value;
  }
  public resetRedeploy() {
    this._redeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeployInput() {
    return this._redeploy;
  }

  // skip_removal - computed: false, optional: true, required: false
  private _skipRemoval?: boolean | cdktf.IResolvable; 
  public get skipRemoval() {
    return this.getBooleanAttribute('skip_removal');
  }
  public set skipRemoval(value: boolean | cdktf.IResolvable) {
    this._skipRemoval = value;
  }
  public resetSkipRemoval() {
    this._skipRemoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRemovalInput() {
    return this._skipRemoval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_alias: cdktf.stringToTerraform(this._certificateAlias),
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      certificate_store_id: cdktf.stringToTerraform(this._certificateStoreId),
      job_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._jobParameters),
      key_password: cdktf.stringToTerraform(this._keyPassword),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      redeploy: cdktf.booleanToTerraform(this._redeploy),
      skip_removal: cdktf.booleanToTerraform(this._skipRemoval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_alias: {
        value: cdktf.stringToHclTerraform(this._certificateAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.numberToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate_store_id: {
        value: cdktf.stringToHclTerraform(this._certificateStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._jobParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_password: {
        value: cdktf.stringToHclTerraform(this._keyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redeploy: {
        value: cdktf.booleanToHclTerraform(this._redeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_removal: {
        value: cdktf.booleanToHclTerraform(this._skipRemoval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
