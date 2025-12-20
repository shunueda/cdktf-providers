// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable [Backend Transfer](https://metal.equinix.com/developers/docs/networking/backend-transfer/), default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#backend_transfer MetalProject#backend_transfer}
  */
  readonly backendTransfer?: boolean | cdktf.IResolvable;
  /**
  * The name of the project. The maximum length is 80 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#name MetalProject#name}
  */
  readonly name: string;
  /**
  * The UUID of organization under which the project is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#organization_id MetalProject#organization_id}
  */
  readonly organizationId?: string;
  /**
  * The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with organization_id, or default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#payment_method_id MetalProject#payment_method_id}
  */
  readonly paymentMethodId?: string;
  /**
  * bgp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#bgp_config MetalProject#bgp_config}
  */
  readonly bgpConfig?: MetalProjectBgpConfig[] | cdktf.IResolvable;
}
export interface MetalProjectBgpConfig {
  /**
  * Autonomous System Number for local BGP deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#asn MetalProject#asn}
  */
  readonly asn: number;
  /**
  * The BGP deployment type, either 'local' or 'global'. The local is likely to be usable immediately, the global will need to be review by Equinix Metal engineers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#deployment_type MetalProject#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Password for BGP session in plaintext (not a checksum)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#md5 MetalProject#md5}
  */
  readonly md5?: string;
}

export function metalProjectBgpConfigToTerraform(struct?: MetalProjectBgpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    md5: cdktf.stringToTerraform(struct!.md5),
  }
}


export function metalProjectBgpConfigToHclTerraform(struct?: MetalProjectBgpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5: {
      value: cdktf.stringToHclTerraform(struct!.md5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetalProjectBgpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MetalProjectBgpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._md5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetalProjectBgpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._deploymentType = undefined;
      this._md5 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._deploymentType = value.deploymentType;
      this._md5 = value.md5;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // max_prefix - computed: true, optional: false, required: false
  public get maxPrefix() {
    return this.getNumberAttribute('max_prefix');
  }

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class MetalProjectBgpConfigList extends cdktf.ComplexList {
  public internalValue? : MetalProjectBgpConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MetalProjectBgpConfigOutputReference {
    return new MetalProjectBgpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project equinix_metal_project}
*/
export class MetalProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalProject to import
  * @param importFromId The id of the existing MetalProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_project equinix_metal_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalProjectConfig
  */
  public constructor(scope: Construct, id: string, config: MetalProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_project',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendTransfer = config.backendTransfer;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._paymentMethodId = config.paymentMethodId;
    this._bgpConfig.internalValue = config.bgpConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_transfer - computed: true, optional: true, required: false
  private _backendTransfer?: boolean | cdktf.IResolvable; 
  public get backendTransfer() {
    return this.getBooleanAttribute('backend_transfer');
  }
  public set backendTransfer(value: boolean | cdktf.IResolvable) {
    this._backendTransfer = value;
  }
  public resetBackendTransfer() {
    this._backendTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendTransferInput() {
    return this._backendTransfer;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // payment_method_id - computed: true, optional: true, required: false
  private _paymentMethodId?: string; 
  public get paymentMethodId() {
    return this.getStringAttribute('payment_method_id');
  }
  public set paymentMethodId(value: string) {
    this._paymentMethodId = value;
  }
  public resetPaymentMethodId() {
    this._paymentMethodId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentMethodIdInput() {
    return this._paymentMethodId;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // bgp_config - computed: false, optional: true, required: false
  private _bgpConfig = new MetalProjectBgpConfigList(this, "bgp_config", false);
  public get bgpConfig() {
    return this._bgpConfig;
  }
  public putBgpConfig(value: MetalProjectBgpConfig[] | cdktf.IResolvable) {
    this._bgpConfig.internalValue = value;
  }
  public resetBgpConfig() {
    this._bgpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConfigInput() {
    return this._bgpConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_transfer: cdktf.booleanToTerraform(this._backendTransfer),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      payment_method_id: cdktf.stringToTerraform(this._paymentMethodId),
      bgp_config: cdktf.listMapper(metalProjectBgpConfigToTerraform, true)(this._bgpConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_transfer: {
        value: cdktf.booleanToHclTerraform(this._backendTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_method_id: {
        value: cdktf.stringToHclTerraform(this._paymentMethodId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_config: {
        value: cdktf.listMapperHcl(metalProjectBgpConfigToHclTerraform, true)(this._bgpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetalProjectBgpConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
