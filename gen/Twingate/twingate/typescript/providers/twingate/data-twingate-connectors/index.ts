// https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwingateConnectorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Returns only connectors that exactly match this name. If no options are passed it will return all connectors. Only one option can be used at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors#name DataTwingateConnectors#name}
  */
  readonly name?: string;
  /**
  * Match when the value exist in the name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors#name_contains DataTwingateConnectors#name_contains}
  */
  readonly nameContains?: string;
  /**
  * Match when the exact value does not exist in the name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors#name_exclude DataTwingateConnectors#name_exclude}
  */
  readonly nameExclude?: string;
  /**
  * The name of the connector must start with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors#name_prefix DataTwingateConnectors#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The regular expression match of the name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors#name_regexp DataTwingateConnectors#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * The name of the connector must end with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors#name_suffix DataTwingateConnectors#name_suffix}
  */
  readonly nameSuffix?: string;
}
export interface DataTwingateConnectorsConnectors {
}

export function dataTwingateConnectorsConnectorsToTerraform(struct?: DataTwingateConnectorsConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateConnectorsConnectorsToHclTerraform(struct?: DataTwingateConnectorsConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateConnectorsConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTwingateConnectorsConnectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateConnectorsConnectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ips - computed: true, optional: false, required: false
  public get privateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ips'));
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // remote_network_id - computed: true, optional: false, required: false
  public get remoteNetworkId() {
    return this.getStringAttribute('remote_network_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status_updates_enabled - computed: true, optional: false, required: false
  public get statusUpdatesEnabled() {
    return this.getBooleanAttribute('status_updates_enabled');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTwingateConnectorsConnectorsList extends cdktf.ComplexList {

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
  public get(index: number): DataTwingateConnectorsConnectorsOutputReference {
    return new DataTwingateConnectorsConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors twingate_connectors}
*/
export class DataTwingateConnectors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_connectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwingateConnectors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwingateConnectors to import
  * @param importFromId The id of the existing DataTwingateConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwingateConnectors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_connectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/connectors twingate_connectors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwingateConnectorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwingateConnectorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twingate_connectors',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._nameContains = config.nameContains;
    this._nameExclude = config.nameExclude;
    this._namePrefix = config.namePrefix;
    this._nameRegexp = config.nameRegexp;
    this._nameSuffix = config.nameSuffix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connectors - computed: true, optional: false, required: false
  private _connectors = new DataTwingateConnectorsConnectorsList(this, "connectors", false);
  public get connectors() {
    return this._connectors;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_contains - computed: false, optional: true, required: false
  private _nameContains?: string; 
  public get nameContains() {
    return this.getStringAttribute('name_contains');
  }
  public set nameContains(value: string) {
    this._nameContains = value;
  }
  public resetNameContains() {
    this._nameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameContainsInput() {
    return this._nameContains;
  }

  // name_exclude - computed: false, optional: true, required: false
  private _nameExclude?: string; 
  public get nameExclude() {
    return this.getStringAttribute('name_exclude');
  }
  public set nameExclude(value: string) {
    this._nameExclude = value;
  }
  public resetNameExclude() {
    this._nameExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameExcludeInput() {
    return this._nameExclude;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      name_contains: cdktf.stringToTerraform(this._nameContains),
      name_exclude: cdktf.stringToTerraform(this._nameExclude),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      name_regexp: cdktf.stringToTerraform(this._nameRegexp),
      name_suffix: cdktf.stringToTerraform(this._nameSuffix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_contains: {
        value: cdktf.stringToHclTerraform(this._nameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_exclude: {
        value: cdktf.stringToHclTerraform(this._nameExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regexp: {
        value: cdktf.stringToHclTerraform(this._nameRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_suffix: {
        value: cdktf.stringToHclTerraform(this._nameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
