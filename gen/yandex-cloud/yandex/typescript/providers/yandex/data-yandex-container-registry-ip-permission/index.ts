// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexContainerRegistryIpPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission#id DataYandexContainerRegistryIpPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the registry that ip restrictions applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission#registry_id DataYandexContainerRegistryIpPermission#registry_id}
  */
  readonly registryId?: string;
  /**
  * The Name of specific Container Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission#registry_name DataYandexContainerRegistryIpPermission#registry_name}
  */
  readonly registryName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission#timeouts DataYandexContainerRegistryIpPermission#timeouts}
  */
  readonly timeouts?: DataYandexContainerRegistryIpPermissionTimeouts;
}
export interface DataYandexContainerRegistryIpPermissionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission#default DataYandexContainerRegistryIpPermission#default}
  */
  readonly default?: string;
}

export function dataYandexContainerRegistryIpPermissionTimeoutsToTerraform(struct?: DataYandexContainerRegistryIpPermissionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function dataYandexContainerRegistryIpPermissionTimeoutsToHclTerraform(struct?: DataYandexContainerRegistryIpPermissionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexContainerRegistryIpPermissionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexContainerRegistryIpPermissionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexContainerRegistryIpPermissionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission yandex_container_registry_ip_permission}
*/
export class DataYandexContainerRegistryIpPermission extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_container_registry_ip_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexContainerRegistryIpPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexContainerRegistryIpPermission to import
  * @param importFromId The id of the existing DataYandexContainerRegistryIpPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexContainerRegistryIpPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_container_registry_ip_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/container_registry_ip_permission yandex_container_registry_ip_permission} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexContainerRegistryIpPermissionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexContainerRegistryIpPermissionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_container_registry_ip_permission',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
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
    this._registryId = config.registryId;
    this._registryName = config.registryName;
    this._timeouts.internalValue = config.timeouts;
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

  // pull - computed: true, optional: false, required: false
  public get pull() {
    return cdktf.Fn.tolist(this.getListAttribute('pull'));
  }

  // push - computed: true, optional: false, required: false
  public get push() {
    return cdktf.Fn.tolist(this.getListAttribute('push'));
  }

  // registry_id - computed: true, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // registry_name - computed: true, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexContainerRegistryIpPermissionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexContainerRegistryIpPermissionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      registry_id: cdktf.stringToTerraform(this._registryId),
      registry_name: cdktf.stringToTerraform(this._registryName),
      timeouts: dataYandexContainerRegistryIpPermissionTimeoutsToTerraform(this._timeouts.internalValue),
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
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_name: {
        value: cdktf.stringToHclTerraform(this._registryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataYandexContainerRegistryIpPermissionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexContainerRegistryIpPermissionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
