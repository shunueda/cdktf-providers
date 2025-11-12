// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventoptionsDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination#name EventoptionsDestination#name}
  */
  readonly name: string;
  /**
  * Delay before transferring files (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination#transfer_delay EventoptionsDestination#transfer_delay}
  */
  readonly transferDelay?: number;
  /**
  * archive_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination#archive_site EventoptionsDestination#archive_site}
  */
  readonly archiveSite?: EventoptionsDestinationArchiveSite[] | cdktf.IResolvable;
}
export interface EventoptionsDestinationArchiveSite {
  /**
  * Password for login into the archive site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination#password EventoptionsDestination#password}
  */
  readonly password?: string;
  /**
  * URL of destination for file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination#url EventoptionsDestination#url}
  */
  readonly url: string;
}

export function eventoptionsDestinationArchiveSiteToTerraform(struct?: EventoptionsDestinationArchiveSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function eventoptionsDestinationArchiveSiteToHclTerraform(struct?: EventoptionsDestinationArchiveSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsDestinationArchiveSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventoptionsDestinationArchiveSite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsDestinationArchiveSite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._url = value.url;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class EventoptionsDestinationArchiveSiteList extends cdktf.ComplexList {
  public internalValue? : EventoptionsDestinationArchiveSite[] | cdktf.IResolvable

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
  public get(index: number): EventoptionsDestinationArchiveSiteOutputReference {
    return new EventoptionsDestinationArchiveSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination junos_eventoptions_destination}
*/
export class EventoptionsDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_eventoptions_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventoptionsDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventoptionsDestination to import
  * @param importFromId The id of the existing EventoptionsDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventoptionsDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_eventoptions_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_destination junos_eventoptions_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventoptionsDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: EventoptionsDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_eventoptions_destination',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
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
    this._transferDelay = config.transferDelay;
    this._archiveSite.internalValue = config.archiveSite;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // transfer_delay - computed: false, optional: true, required: false
  private _transferDelay?: number; 
  public get transferDelay() {
    return this.getNumberAttribute('transfer_delay');
  }
  public set transferDelay(value: number) {
    this._transferDelay = value;
  }
  public resetTransferDelay() {
    this._transferDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferDelayInput() {
    return this._transferDelay;
  }

  // archive_site - computed: false, optional: true, required: false
  private _archiveSite = new EventoptionsDestinationArchiveSiteList(this, "archive_site", false);
  public get archiveSite() {
    return this._archiveSite;
  }
  public putArchiveSite(value: EventoptionsDestinationArchiveSite[] | cdktf.IResolvable) {
    this._archiveSite.internalValue = value;
  }
  public resetArchiveSite() {
    this._archiveSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveSiteInput() {
    return this._archiveSite.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      transfer_delay: cdktf.numberToTerraform(this._transferDelay),
      archive_site: cdktf.listMapper(eventoptionsDestinationArchiveSiteToTerraform, true)(this._archiveSite.internalValue),
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
      transfer_delay: {
        value: cdktf.numberToHclTerraform(this._transferDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      archive_site: {
        value: cdktf.listMapperHcl(eventoptionsDestinationArchiveSiteToHclTerraform, true)(this._archiveSite.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventoptionsDestinationArchiveSiteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
