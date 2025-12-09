// https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_acme_plugins
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentAcmePluginsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataProxmoxVirtualEnvironmentAcmePluginsPlugins {
}

export function dataProxmoxVirtualEnvironmentAcmePluginsPluginsToTerraform(struct?: DataProxmoxVirtualEnvironmentAcmePluginsPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProxmoxVirtualEnvironmentAcmePluginsPluginsToHclTerraform(struct?: DataProxmoxVirtualEnvironmentAcmePluginsPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProxmoxVirtualEnvironmentAcmePluginsPluginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentAcmePluginsPlugins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentAcmePluginsPlugins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getStringAttribute('api');
  }

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // plugin - computed: true, optional: false, required: false
  public get plugin() {
    return this.getStringAttribute('plugin');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validation_delay - computed: true, optional: false, required: false
  public get validationDelay() {
    return this.getNumberAttribute('validation_delay');
  }
}

export class DataProxmoxVirtualEnvironmentAcmePluginsPluginsList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualEnvironmentAcmePluginsPluginsOutputReference {
    return new DataProxmoxVirtualEnvironmentAcmePluginsPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_acme_plugins proxmox_virtual_environment_acme_plugins}
*/
export class DataProxmoxVirtualEnvironmentAcmePlugins extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_acme_plugins";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentAcmePlugins resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentAcmePlugins to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentAcmePlugins that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_acme_plugins#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentAcmePlugins to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_acme_plugins", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_acme_plugins proxmox_virtual_environment_acme_plugins} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentAcmePluginsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentAcmePluginsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_acme_plugins',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.1',
        providerVersionConstraint: '0.89.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // plugins - computed: true, optional: false, required: false
  private _plugins = new DataProxmoxVirtualEnvironmentAcmePluginsPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
