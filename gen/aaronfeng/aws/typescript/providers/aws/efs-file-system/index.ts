// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#creation_token EfsFileSystem#creation_token}
  */
  readonly creationToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#id EfsFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}
  */
  readonly performanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}
  */
  readonly provisionedThroughputInMibps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#tags EfsFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}
  */
  readonly throughputMode?: string;
  /**
  * lifecycle_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#lifecycle_policy EfsFileSystem#lifecycle_policy}
  */
  readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy;
}
export interface EfsFileSystemLifecyclePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}
  */
  readonly transitionToIa: string;
}

export function efsFileSystemLifecyclePolicyToTerraform(struct?: EfsFileSystemLifecyclePolicyOutputReference | EfsFileSystemLifecyclePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transition_to_ia: cdktf.stringToTerraform(struct!.transitionToIa),
  }
}


export function efsFileSystemLifecyclePolicyToHclTerraform(struct?: EfsFileSystemLifecyclePolicyOutputReference | EfsFileSystemLifecyclePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transition_to_ia: {
      value: cdktf.stringToHclTerraform(struct!.transitionToIa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfsFileSystemLifecyclePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfsFileSystemLifecyclePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transitionToIa !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionToIa = this._transitionToIa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfsFileSystemLifecyclePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transitionToIa = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transitionToIa = value.transitionToIa;
    }
  }

  // transition_to_ia - computed: false, optional: false, required: true
  private _transitionToIa?: string; 
  public get transitionToIa() {
    return this.getStringAttribute('transition_to_ia');
  }
  public set transitionToIa(value: string) {
    this._transitionToIa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionToIaInput() {
    return this._transitionToIa;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system aws_efs_file_system}
*/
export class EfsFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_efs_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EfsFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EfsFileSystem to import
  * @param importFromId The id of the existing EfsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EfsFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_efs_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/efs_file_system aws_efs_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfsFileSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EfsFileSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._creationToken = config.creationToken;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._performanceMode = config.performanceMode;
    this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
    this._tags = config.tags;
    this._throughputMode = config.throughputMode;
    this._lifecyclePolicy.internalValue = config.lifecyclePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_token - computed: true, optional: true, required: false
  private _creationToken?: string; 
  public get creationToken() {
    return this.getStringAttribute('creation_token');
  }
  public set creationToken(value: string) {
    this._creationToken = value;
  }
  public resetCreationToken() {
    this._creationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTokenInput() {
    return this._creationToken;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // performance_mode - computed: true, optional: true, required: false
  private _performanceMode?: string; 
  public get performanceMode() {
    return this.getStringAttribute('performance_mode');
  }
  public set performanceMode(value: string) {
    this._performanceMode = value;
  }
  public resetPerformanceMode() {
    this._performanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceModeInput() {
    return this._performanceMode;
  }

  // provisioned_throughput_in_mibps - computed: false, optional: true, required: false
  private _provisionedThroughputInMibps?: number; 
  public get provisionedThroughputInMibps() {
    return this.getNumberAttribute('provisioned_throughput_in_mibps');
  }
  public set provisionedThroughputInMibps(value: number) {
    this._provisionedThroughputInMibps = value;
  }
  public resetProvisionedThroughputInMibps() {
    this._provisionedThroughputInMibps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInMibpsInput() {
    return this._provisionedThroughputInMibps;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // throughput_mode - computed: false, optional: true, required: false
  private _throughputMode?: string; 
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
  public set throughputMode(value: string) {
    this._throughputMode = value;
  }
  public resetThroughputMode() {
    this._throughputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputModeInput() {
    return this._throughputMode;
  }

  // lifecycle_policy - computed: false, optional: true, required: false
  private _lifecyclePolicy = new EfsFileSystemLifecyclePolicyOutputReference(this, "lifecycle_policy");
  public get lifecyclePolicy() {
    return this._lifecyclePolicy;
  }
  public putLifecyclePolicy(value: EfsFileSystemLifecyclePolicy) {
    this._lifecyclePolicy.internalValue = value;
  }
  public resetLifecyclePolicy() {
    this._lifecyclePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyInput() {
    return this._lifecyclePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creation_token: cdktf.stringToTerraform(this._creationToken),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      performance_mode: cdktf.stringToTerraform(this._performanceMode),
      provisioned_throughput_in_mibps: cdktf.numberToTerraform(this._provisionedThroughputInMibps),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      throughput_mode: cdktf.stringToTerraform(this._throughputMode),
      lifecycle_policy: efsFileSystemLifecyclePolicyToTerraform(this._lifecyclePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      creation_token: {
        value: cdktf.stringToHclTerraform(this._creationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_mode: {
        value: cdktf.stringToHclTerraform(this._performanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_throughput_in_mibps: {
        value: cdktf.numberToHclTerraform(this._provisionedThroughputInMibps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      throughput_mode: {
        value: cdktf.stringToHclTerraform(this._throughputMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_policy: {
        value: efsFileSystemLifecyclePolicyToHclTerraform(this._lifecyclePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfsFileSystemLifecyclePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
