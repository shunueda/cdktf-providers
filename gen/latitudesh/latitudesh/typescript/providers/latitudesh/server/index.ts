// https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow server reinstallation when operating_system, ssh_keys, user_data, raid, or ipxe changes. If false, only in-place updates are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#allow_reinstall Server#allow_reinstall}
  */
  readonly allowReinstall?: boolean | cdktf.IResolvable;
  /**
  * The server billing type (hourly, monthly, yearly). Defaults to monthly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#billing Server#billing}
  */
  readonly billing?: string;
  /**
  * The server hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#hostname Server#hostname}
  */
  readonly hostname?: string;
  /**
  * URL where iPXE script is stored on, OR the iPXE script encoded in base64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#ipxe Server#ipxe}
  */
  readonly ipxe?: string;
  /**
  * Whether the server is locked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#locked Server#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The operating system for the new server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#operating_system Server#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * The plan to choose server from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#plan Server#plan}
  */
  readonly plan: string;
  /**
  * The project (ID or Slug) to deploy the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#project Server#project}
  */
  readonly project?: string;
  /**
  * RAID mode for the server (raid-0, raid-1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#raid Server#raid}
  */
  readonly raid?: string;
  /**
  * The site to deploy the server (case-insensitive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#site Server#site}
  */
  readonly site: string;
  /**
  * SSH Keys to set on the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#ssh_keys Server#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * List of server tag IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#tags Server#tags}
  */
  readonly tags?: string[];
  /**
  * User data ID to assign to the server (reference to latitudesh_user_data resource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#user_data Server#user_data}
  */
  readonly userData?: string;
}
export interface ServerInterfaces {
}

export function serverInterfacesToTerraform(struct?: ServerInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverInterfacesToHclTerraform(struct?: ServerInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ServerInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): ServerInterfacesOutputReference {
    return new ServerInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server latitudesh_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "latitudesh_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "latitudesh_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.6/docs/resources/server latitudesh_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'latitudesh_server',
      terraformGeneratorMetadata: {
        providerName: 'latitudesh',
        providerVersion: '2.8.6',
        providerVersionConstraint: '2.8.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowReinstall = config.allowReinstall;
    this._billing = config.billing;
    this._hostname = config.hostname;
    this._ipxe = config.ipxe;
    this._locked = config.locked;
    this._operatingSystem = config.operatingSystem;
    this._plan = config.plan;
    this._project = config.project;
    this._raid = config.raid;
    this._site = config.site;
    this._sshKeys = config.sshKeys;
    this._tags = config.tags;
    this._userData = config.userData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_reinstall - computed: true, optional: true, required: false
  private _allowReinstall?: boolean | cdktf.IResolvable; 
  public get allowReinstall() {
    return this.getBooleanAttribute('allow_reinstall');
  }
  public set allowReinstall(value: boolean | cdktf.IResolvable) {
    this._allowReinstall = value;
  }
  public resetAllowReinstall() {
    this._allowReinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReinstallInput() {
    return this._allowReinstall;
  }

  // billing - computed: true, optional: true, required: false
  private _billing?: string; 
  public get billing() {
    return this.getStringAttribute('billing');
  }
  public set billing(value: string) {
    this._billing = value;
  }
  public resetBilling() {
    this._billing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingInput() {
    return this._billing;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ServerInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // ipxe - computed: false, optional: true, required: false
  private _ipxe?: string; 
  public get ipxe() {
    return this.getStringAttribute('ipxe');
  }
  public set ipxe(value: string) {
    this._ipxe = value;
  }
  public resetIpxe() {
    this._ipxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeInput() {
    return this._ipxe;
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // primary_ipv4 - computed: true, optional: false, required: false
  public get primaryIpv4() {
    return this.getStringAttribute('primary_ipv4');
  }

  // primary_ipv6 - computed: true, optional: false, required: false
  public get primaryIpv6() {
    return this.getStringAttribute('primary_ipv6');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // raid - computed: false, optional: true, required: false
  private _raid?: string; 
  public get raid() {
    return this.getStringAttribute('raid');
  }
  public set raid(value: string) {
    this._raid = value;
  }
  public resetRaid() {
    this._raid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidInput() {
    return this._raid;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // site - computed: false, optional: false, required: true
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_reinstall: cdktf.booleanToTerraform(this._allowReinstall),
      billing: cdktf.stringToTerraform(this._billing),
      hostname: cdktf.stringToTerraform(this._hostname),
      ipxe: cdktf.stringToTerraform(this._ipxe),
      locked: cdktf.booleanToTerraform(this._locked),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      plan: cdktf.stringToTerraform(this._plan),
      project: cdktf.stringToTerraform(this._project),
      raid: cdktf.stringToTerraform(this._raid),
      site: cdktf.stringToTerraform(this._site),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_reinstall: {
        value: cdktf.booleanToHclTerraform(this._allowReinstall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing: {
        value: cdktf.stringToHclTerraform(this._billing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipxe: {
        value: cdktf.stringToHclTerraform(this._ipxe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raid: {
        value: cdktf.stringToHclTerraform(this._raid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
