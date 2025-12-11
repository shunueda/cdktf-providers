// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerEksConfig extends cdktf.TerraformMetaArguments {
  /**
  * EKS Access Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#eks_access_key_id ProducerEks#eks_access_key_id}
  */
  readonly eksAccessKeyId?: string;
  /**
  * Role ARN. Role to assume when connecting to the EKS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#eks_assume_role ProducerEks#eks_assume_role}
  */
  readonly eksAssumeRole?: string;
  /**
  * EKS Cluster certificate. Base 64 encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#eks_cluster_ca_cert ProducerEks#eks_cluster_ca_cert}
  */
  readonly eksClusterCaCert?: string;
  /**
  * EKS Cluster endpoint. https:// , <DNS / IP> of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#eks_cluster_endpoint ProducerEks#eks_cluster_endpoint}
  */
  readonly eksClusterEndpoint?: string;
  /**
  * EKS cluster name. Must match the EKS cluster name you want to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#eks_cluster_name ProducerEks#eks_cluster_name}
  */
  readonly eksClusterName?: string;
  /**
  * EKS Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#eks_region ProducerEks#eks_region}
  */
  readonly eksRegion?: string;
  /**
  * EKS Secret Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#eks_secret_access_key ProducerEks#eks_secret_access_key}
  */
  readonly eksSecretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#id ProducerEks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#name ProducerEks#name}
  */
  readonly name: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#producer_encryption_key_name ProducerEks#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * Enable Port forwarding while using CLI access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#secure_access_allow_port_forwading ProducerEks#secure_access_allow_port_forwading}
  */
  readonly secureAccessAllowPortForwading?: boolean | cdktf.IResolvable;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#secure_access_bastion_issuer ProducerEks#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * The K8s cluster endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#secure_access_cluster_endpoint ProducerEks#secure_access_cluster_endpoint}
  */
  readonly secureAccessClusterEndpoint?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#secure_access_enable ProducerEks#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#secure_access_web ProducerEks#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#tags ProducerEks#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#target_name ProducerEks#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#user_ttl ProducerEks#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks akeyless_producer_eks}
*/
export class ProducerEks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_eks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerEks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerEks to import
  * @param importFromId The id of the existing ProducerEks that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerEks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_eks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_eks akeyless_producer_eks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerEksConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerEksConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_eks',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eksAccessKeyId = config.eksAccessKeyId;
    this._eksAssumeRole = config.eksAssumeRole;
    this._eksClusterCaCert = config.eksClusterCaCert;
    this._eksClusterEndpoint = config.eksClusterEndpoint;
    this._eksClusterName = config.eksClusterName;
    this._eksRegion = config.eksRegion;
    this._eksSecretAccessKey = config.eksSecretAccessKey;
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

  // eks_access_key_id - computed: false, optional: true, required: false
  private _eksAccessKeyId?: string; 
  public get eksAccessKeyId() {
    return this.getStringAttribute('eks_access_key_id');
  }
  public set eksAccessKeyId(value: string) {
    this._eksAccessKeyId = value;
  }
  public resetEksAccessKeyId() {
    this._eksAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksAccessKeyIdInput() {
    return this._eksAccessKeyId;
  }

  // eks_assume_role - computed: false, optional: true, required: false
  private _eksAssumeRole?: string; 
  public get eksAssumeRole() {
    return this.getStringAttribute('eks_assume_role');
  }
  public set eksAssumeRole(value: string) {
    this._eksAssumeRole = value;
  }
  public resetEksAssumeRole() {
    this._eksAssumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksAssumeRoleInput() {
    return this._eksAssumeRole;
  }

  // eks_cluster_ca_cert - computed: false, optional: true, required: false
  private _eksClusterCaCert?: string; 
  public get eksClusterCaCert() {
    return this.getStringAttribute('eks_cluster_ca_cert');
  }
  public set eksClusterCaCert(value: string) {
    this._eksClusterCaCert = value;
  }
  public resetEksClusterCaCert() {
    this._eksClusterCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClusterCaCertInput() {
    return this._eksClusterCaCert;
  }

  // eks_cluster_endpoint - computed: false, optional: true, required: false
  private _eksClusterEndpoint?: string; 
  public get eksClusterEndpoint() {
    return this.getStringAttribute('eks_cluster_endpoint');
  }
  public set eksClusterEndpoint(value: string) {
    this._eksClusterEndpoint = value;
  }
  public resetEksClusterEndpoint() {
    this._eksClusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClusterEndpointInput() {
    return this._eksClusterEndpoint;
  }

  // eks_cluster_name - computed: false, optional: true, required: false
  private _eksClusterName?: string; 
  public get eksClusterName() {
    return this.getStringAttribute('eks_cluster_name');
  }
  public set eksClusterName(value: string) {
    this._eksClusterName = value;
  }
  public resetEksClusterName() {
    this._eksClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClusterNameInput() {
    return this._eksClusterName;
  }

  // eks_region - computed: false, optional: true, required: false
  private _eksRegion?: string; 
  public get eksRegion() {
    return this.getStringAttribute('eks_region');
  }
  public set eksRegion(value: string) {
    this._eksRegion = value;
  }
  public resetEksRegion() {
    this._eksRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksRegionInput() {
    return this._eksRegion;
  }

  // eks_secret_access_key - computed: false, optional: true, required: false
  private _eksSecretAccessKey?: string; 
  public get eksSecretAccessKey() {
    return this.getStringAttribute('eks_secret_access_key');
  }
  public set eksSecretAccessKey(value: string) {
    this._eksSecretAccessKey = value;
  }
  public resetEksSecretAccessKey() {
    this._eksSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksSecretAccessKeyInput() {
    return this._eksSecretAccessKey;
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
      eks_access_key_id: cdktf.stringToTerraform(this._eksAccessKeyId),
      eks_assume_role: cdktf.stringToTerraform(this._eksAssumeRole),
      eks_cluster_ca_cert: cdktf.stringToTerraform(this._eksClusterCaCert),
      eks_cluster_endpoint: cdktf.stringToTerraform(this._eksClusterEndpoint),
      eks_cluster_name: cdktf.stringToTerraform(this._eksClusterName),
      eks_region: cdktf.stringToTerraform(this._eksRegion),
      eks_secret_access_key: cdktf.stringToTerraform(this._eksSecretAccessKey),
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
      eks_access_key_id: {
        value: cdktf.stringToHclTerraform(this._eksAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_assume_role: {
        value: cdktf.stringToHclTerraform(this._eksAssumeRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_cluster_ca_cert: {
        value: cdktf.stringToHclTerraform(this._eksClusterCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._eksClusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_cluster_name: {
        value: cdktf.stringToHclTerraform(this._eksClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_region: {
        value: cdktf.stringToHclTerraform(this._eksRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._eksSecretAccessKey),
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
