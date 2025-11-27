// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhDedicatedServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server#id DataOvhDedicatedServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server#service_name DataOvhDedicatedServer#service_name}
  */
  readonly serviceName: string;
}
export interface DataOvhDedicatedServerVnis {
}

export function dataOvhDedicatedServerVnisToTerraform(struct?: DataOvhDedicatedServerVnis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerVnisToHclTerraform(struct?: DataOvhDedicatedServerVnis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerVnisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhDedicatedServerVnis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerVnis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nics - computed: true, optional: false, required: false
  public get nics() {
    return this.getListAttribute('nics');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vrack - computed: true, optional: false, required: false
  public get vrack() {
    return this.getStringAttribute('vrack');
  }
}

export class DataOvhDedicatedServerVnisList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhDedicatedServerVnisOutputReference {
    return new DataOvhDedicatedServerVnisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server ovh_dedicated_server}
*/
export class DataOvhDedicatedServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dedicated_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhDedicatedServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhDedicatedServer to import
  * @param importFromId The id of the existing DataOvhDedicatedServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhDedicatedServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dedicated_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server ovh_dedicated_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhDedicatedServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhDedicatedServerConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dedicated_server',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // boot_id - computed: true, optional: false, required: false
  public get bootId() {
    return this.getNumberAttribute('boot_id');
  }

  // boot_script - computed: true, optional: false, required: false
  public get bootScript() {
    return this.getStringAttribute('boot_script');
  }

  // commercial_range - computed: true, optional: false, required: false
  public get commercialRange() {
    return this.getStringAttribute('commercial_range');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // efi_bootloader_path - computed: true, optional: false, required: false
  public get efiBootloaderPath() {
    return this.getStringAttribute('efi_bootloader_path');
  }

  // enabled_public_vnis - computed: true, optional: false, required: false
  public get enabledPublicVnis() {
    return this.getListAttribute('enabled_public_vnis');
  }

  // enabled_vrack_aggregation_vnis - computed: true, optional: false, required: false
  public get enabledVrackAggregationVnis() {
    return this.getListAttribute('enabled_vrack_aggregation_vnis');
  }

  // enabled_vrack_vnis - computed: true, optional: false, required: false
  public get enabledVrackVnis() {
    return this.getListAttribute('enabled_vrack_vnis');
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // link_speed - computed: true, optional: false, required: false
  public get linkSpeed() {
    return this.getNumberAttribute('link_speed');
  }

  // monitoring - computed: true, optional: false, required: false
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_upgrade_system - computed: true, optional: false, required: false
  public get newUpgradeSystem() {
    return this.getBooleanAttribute('new_upgrade_system');
  }

  // no_intervention - computed: true, optional: false, required: false
  public get noIntervention() {
    return this.getBooleanAttribute('no_intervention');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // professional_use - computed: true, optional: false, required: false
  public get professionalUse() {
    return this.getBooleanAttribute('professional_use');
  }

  // rack - computed: true, optional: false, required: false
  public get rack() {
    return this.getStringAttribute('rack');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // rescue_mail - computed: true, optional: false, required: false
  public get rescueMail() {
    return this.getStringAttribute('rescue_mail');
  }

  // rescue_ssh_key - computed: true, optional: false, required: false
  public get rescueSshKey() {
    return this.getStringAttribute('rescue_ssh_key');
  }

  // reverse - computed: true, optional: false, required: false
  public get reverse() {
    return this.getStringAttribute('reverse');
  }

  // root_device - computed: true, optional: false, required: false
  public get rootDevice() {
    return this.getStringAttribute('root_device');
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getNumberAttribute('server_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // support_level - computed: true, optional: false, required: false
  public get supportLevel() {
    return this.getStringAttribute('support_level');
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // vnis - computed: true, optional: false, required: false
  private _vnis = new DataOvhDedicatedServerVnisList(this, "vnis", false);
  public get vnis() {
    return this._vnis;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
