// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesEncryptionProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection#cluster_id KubernetesEncryptionProtection#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection#id KubernetesEncryptionProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * kms_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection#kms_configuration KubernetesEncryptionProtection#kms_configuration}
  */
  readonly kmsConfiguration: KubernetesEncryptionProtectionKmsConfiguration;
}
export interface KubernetesEncryptionProtectionKmsConfiguration {
  /**
  * kms id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection#key_id KubernetesEncryptionProtection#key_id}
  */
  readonly keyId?: string;
  /**
  * kms region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection#kms_region KubernetesEncryptionProtection#kms_region}
  */
  readonly kmsRegion?: string;
}

export function kubernetesEncryptionProtectionKmsConfigurationToTerraform(struct?: KubernetesEncryptionProtectionKmsConfigurationOutputReference | KubernetesEncryptionProtectionKmsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    kms_region: cdktf.stringToTerraform(struct!.kmsRegion),
  }
}


export function kubernetesEncryptionProtectionKmsConfigurationToHclTerraform(struct?: KubernetesEncryptionProtectionKmsConfigurationOutputReference | KubernetesEncryptionProtectionKmsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_region: {
      value: cdktf.stringToHclTerraform(struct!.kmsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesEncryptionProtectionKmsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesEncryptionProtectionKmsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._kmsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsRegion = this._kmsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesEncryptionProtectionKmsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._kmsRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._kmsRegion = value.kmsRegion;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // kms_region - computed: false, optional: true, required: false
  private _kmsRegion?: string; 
  public get kmsRegion() {
    return this.getStringAttribute('kms_region');
  }
  public set kmsRegion(value: string) {
    this._kmsRegion = value;
  }
  public resetKmsRegion() {
    this._kmsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsRegionInput() {
    return this._kmsRegion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection tencentcloud_kubernetes_encryption_protection}
*/
export class KubernetesEncryptionProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_encryption_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesEncryptionProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesEncryptionProtection to import
  * @param importFromId The id of the existing KubernetesEncryptionProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesEncryptionProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_encryption_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/kubernetes_encryption_protection tencentcloud_kubernetes_encryption_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesEncryptionProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesEncryptionProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_encryption_protection',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._kmsConfiguration.internalValue = config.kmsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // kms_configuration - computed: false, optional: false, required: true
  private _kmsConfiguration = new KubernetesEncryptionProtectionKmsConfigurationOutputReference(this, "kms_configuration");
  public get kmsConfiguration() {
    return this._kmsConfiguration;
  }
  public putKmsConfiguration(value: KubernetesEncryptionProtectionKmsConfiguration) {
    this._kmsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsConfigurationInput() {
    return this._kmsConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      kms_configuration: kubernetesEncryptionProtectionKmsConfigurationToTerraform(this._kmsConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      kms_configuration: {
        value: kubernetesEncryptionProtectionKmsConfigurationToHclTerraform(this._kmsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesEncryptionProtectionKmsConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
