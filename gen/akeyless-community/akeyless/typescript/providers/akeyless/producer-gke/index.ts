// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerGkeConfig extends cdktf.TerraformMetaArguments {
  /**
  * GKE service account key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#gke_account_key ProducerGke#gke_account_key}
  */
  readonly gkeAccountKey?: string;
  /**
  * GKE Base-64 encoded cluster certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#gke_cluster_cert ProducerGke#gke_cluster_cert}
  */
  readonly gkeClusterCert?: string;
  /**
  * GKE cluster endpoint, i.e., cluster URI https://<DNS/IP>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#gke_cluster_endpoint ProducerGke#gke_cluster_endpoint}
  */
  readonly gkeClusterEndpoint?: string;
  /**
  * GKE cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#gke_cluster_name ProducerGke#gke_cluster_name}
  */
  readonly gkeClusterName?: string;
  /**
  * GKE service account email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#gke_service_account_email ProducerGke#gke_service_account_email}
  */
  readonly gkeServiceAccountEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#id ProducerGke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#name ProducerGke#name}
  */
  readonly name: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#producer_encryption_key_name ProducerGke#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * Enable Port forwarding while using CLI access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#secure_access_allow_port_forwading ProducerGke#secure_access_allow_port_forwading}
  */
  readonly secureAccessAllowPortForwading?: boolean | cdktf.IResolvable;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#secure_access_bastion_issuer ProducerGke#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * The K8s cluster endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#secure_access_cluster_endpoint ProducerGke#secure_access_cluster_endpoint}
  */
  readonly secureAccessClusterEndpoint?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#secure_access_enable ProducerGke#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#secure_access_web ProducerGke#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#tags ProducerGke#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#target_name ProducerGke#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#user_ttl ProducerGke#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke akeyless_producer_gke}
*/
export class ProducerGke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_gke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerGke resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerGke to import
  * @param importFromId The id of the existing ProducerGke that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerGke to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_gke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gke akeyless_producer_gke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerGkeConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerGkeConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_gke',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gkeAccountKey = config.gkeAccountKey;
    this._gkeClusterCert = config.gkeClusterCert;
    this._gkeClusterEndpoint = config.gkeClusterEndpoint;
    this._gkeClusterName = config.gkeClusterName;
    this._gkeServiceAccountEmail = config.gkeServiceAccountEmail;
    this._id = config.id;
    this._name = config.name;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
    this._secureAccessAllowPortForwading = config.secureAccessAllowPortForwading;
    this._secureAccessBastionIssuer = config.secureAccessBastionIssuer;
    this._secureAccessClusterEndpoint = config.secureAccessClusterEndpoint;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessWeb = config.secureAccessWeb;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gke_account_key - computed: false, optional: true, required: false
  private _gkeAccountKey?: string; 
  public get gkeAccountKey() {
    return this.getStringAttribute('gke_account_key');
  }
  public set gkeAccountKey(value: string) {
    this._gkeAccountKey = value;
  }
  public resetGkeAccountKey() {
    this._gkeAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeAccountKeyInput() {
    return this._gkeAccountKey;
  }

  // gke_cluster_cert - computed: false, optional: true, required: false
  private _gkeClusterCert?: string; 
  public get gkeClusterCert() {
    return this.getStringAttribute('gke_cluster_cert');
  }
  public set gkeClusterCert(value: string) {
    this._gkeClusterCert = value;
  }
  public resetGkeClusterCert() {
    this._gkeClusterCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterCertInput() {
    return this._gkeClusterCert;
  }

  // gke_cluster_endpoint - computed: false, optional: true, required: false
  private _gkeClusterEndpoint?: string; 
  public get gkeClusterEndpoint() {
    return this.getStringAttribute('gke_cluster_endpoint');
  }
  public set gkeClusterEndpoint(value: string) {
    this._gkeClusterEndpoint = value;
  }
  public resetGkeClusterEndpoint() {
    this._gkeClusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterEndpointInput() {
    return this._gkeClusterEndpoint;
  }

  // gke_cluster_name - computed: false, optional: true, required: false
  private _gkeClusterName?: string; 
  public get gkeClusterName() {
    return this.getStringAttribute('gke_cluster_name');
  }
  public set gkeClusterName(value: string) {
    this._gkeClusterName = value;
  }
  public resetGkeClusterName() {
    this._gkeClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterNameInput() {
    return this._gkeClusterName;
  }

  // gke_service_account_email - computed: false, optional: true, required: false
  private _gkeServiceAccountEmail?: string; 
  public get gkeServiceAccountEmail() {
    return this.getStringAttribute('gke_service_account_email');
  }
  public set gkeServiceAccountEmail(value: string) {
    this._gkeServiceAccountEmail = value;
  }
  public resetGkeServiceAccountEmail() {
    this._gkeServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeServiceAccountEmailInput() {
    return this._gkeServiceAccountEmail;
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

  // producer_encryption_key_name - computed: false, optional: true, required: false
  private _producerEncryptionKeyName?: string; 
  public get producerEncryptionKeyName() {
    return this.getStringAttribute('producer_encryption_key_name');
  }
  public set producerEncryptionKeyName(value: string) {
    this._producerEncryptionKeyName = value;
  }
  public resetProducerEncryptionKeyName() {
    this._producerEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerEncryptionKeyNameInput() {
    return this._producerEncryptionKeyName;
  }

  // secure_access_allow_port_forwading - computed: false, optional: true, required: false
  private _secureAccessAllowPortForwading?: boolean | cdktf.IResolvable; 
  public get secureAccessAllowPortForwading() {
    return this.getBooleanAttribute('secure_access_allow_port_forwading');
  }
  public set secureAccessAllowPortForwading(value: boolean | cdktf.IResolvable) {
    this._secureAccessAllowPortForwading = value;
  }
  public resetSecureAccessAllowPortForwading() {
    this._secureAccessAllowPortForwading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessAllowPortForwadingInput() {
    return this._secureAccessAllowPortForwading;
  }

  // secure_access_bastion_issuer - computed: false, optional: true, required: false
  private _secureAccessBastionIssuer?: string; 
  public get secureAccessBastionIssuer() {
    return this.getStringAttribute('secure_access_bastion_issuer');
  }
  public set secureAccessBastionIssuer(value: string) {
    this._secureAccessBastionIssuer = value;
  }
  public resetSecureAccessBastionIssuer() {
    this._secureAccessBastionIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessBastionIssuerInput() {
    return this._secureAccessBastionIssuer;
  }

  // secure_access_cluster_endpoint - computed: false, optional: true, required: false
  private _secureAccessClusterEndpoint?: string; 
  public get secureAccessClusterEndpoint() {
    return this.getStringAttribute('secure_access_cluster_endpoint');
  }
  public set secureAccessClusterEndpoint(value: string) {
    this._secureAccessClusterEndpoint = value;
  }
  public resetSecureAccessClusterEndpoint() {
    this._secureAccessClusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessClusterEndpointInput() {
    return this._secureAccessClusterEndpoint;
  }

  // secure_access_enable - computed: false, optional: true, required: false
  private _secureAccessEnable?: string; 
  public get secureAccessEnable() {
    return this.getStringAttribute('secure_access_enable');
  }
  public set secureAccessEnable(value: string) {
    this._secureAccessEnable = value;
  }
  public resetSecureAccessEnable() {
    this._secureAccessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessEnableInput() {
    return this._secureAccessEnable;
  }

  // secure_access_web - computed: false, optional: true, required: false
  private _secureAccessWeb?: boolean | cdktf.IResolvable; 
  public get secureAccessWeb() {
    return this.getBooleanAttribute('secure_access_web');
  }
  public set secureAccessWeb(value: boolean | cdktf.IResolvable) {
    this._secureAccessWeb = value;
  }
  public resetSecureAccessWeb() {
    this._secureAccessWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebInput() {
    return this._secureAccessWeb;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gke_account_key: cdktf.stringToTerraform(this._gkeAccountKey),
      gke_cluster_cert: cdktf.stringToTerraform(this._gkeClusterCert),
      gke_cluster_endpoint: cdktf.stringToTerraform(this._gkeClusterEndpoint),
      gke_cluster_name: cdktf.stringToTerraform(this._gkeClusterName),
      gke_service_account_email: cdktf.stringToTerraform(this._gkeServiceAccountEmail),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
      secure_access_allow_port_forwading: cdktf.booleanToTerraform(this._secureAccessAllowPortForwading),
      secure_access_bastion_issuer: cdktf.stringToTerraform(this._secureAccessBastionIssuer),
      secure_access_cluster_endpoint: cdktf.stringToTerraform(this._secureAccessClusterEndpoint),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gke_account_key: {
        value: cdktf.stringToHclTerraform(this._gkeAccountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_cluster_cert: {
        value: cdktf.stringToHclTerraform(this._gkeClusterCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeClusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_cluster_name: {
        value: cdktf.stringToHclTerraform(this._gkeClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_service_account_email: {
        value: cdktf.stringToHclTerraform(this._gkeServiceAccountEmail),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      producer_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_allow_port_forwading: {
        value: cdktf.booleanToHclTerraform(this._secureAccessAllowPortForwading),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_bastion_issuer: {
        value: cdktf.stringToHclTerraform(this._secureAccessBastionIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._secureAccessClusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_enable: {
        value: cdktf.stringToHclTerraform(this._secureAccessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_web: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
