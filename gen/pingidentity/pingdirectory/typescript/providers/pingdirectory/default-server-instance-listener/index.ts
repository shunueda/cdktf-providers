// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultServerInstanceListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the mechanism to use for securing connections to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#connection_security DefaultServerInstanceListener#connection_security}
  */
  readonly connectionSecurity?: string;
  /**
  * If the server is listening on a particular address different from the hostname, then this property may be used to specify the address on which to listen for connections from HTTP clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#listen_address DefaultServerInstanceListener#listen_address}
  */
  readonly listenAddress?: string;
  /**
  * The public component of the certificate that the listener is expected to present to clients. When establishing a connection to this server, only the certificate(s) listed here will be trusted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#listener_certificate DefaultServerInstanceListener#listener_certificate}
  */
  readonly listenerCertificate?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#name DefaultServerInstanceListener#name}
  */
  readonly name: string;
  /**
  * Identifies the purpose of this Server Instance Listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#purpose DefaultServerInstanceListener#purpose}
  */
  readonly purpose?: string[];
  /**
  * The TCP port number on which the HTTP server is listening.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#server_http_port DefaultServerInstanceListener#server_http_port}
  */
  readonly serverHttpPort?: number;
  /**
  * Name of the parent Server Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#server_instance_name DefaultServerInstanceListener#server_instance_name}
  */
  readonly serverInstanceName: string;
  /**
  * The TCP port number on which the LDAP server is listening.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#server_ldap_port DefaultServerInstanceListener#server_ldap_port}
  */
  readonly serverLdapPort?: number;
}
export interface DefaultServerInstanceListenerRequiredActions {
}

export function defaultServerInstanceListenerRequiredActionsToTerraform(struct?: DefaultServerInstanceListenerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultServerInstanceListenerRequiredActionsToHclTerraform(struct?: DefaultServerInstanceListenerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultServerInstanceListenerRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultServerInstanceListenerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultServerInstanceListenerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultServerInstanceListenerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultServerInstanceListenerRequiredActionsOutputReference {
    return new DefaultServerInstanceListenerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener pingdirectory_default_server_instance_listener}
*/
export class DefaultServerInstanceListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_server_instance_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultServerInstanceListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultServerInstanceListener to import
  * @param importFromId The id of the existing DefaultServerInstanceListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultServerInstanceListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_server_instance_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance_listener pingdirectory_default_server_instance_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultServerInstanceListenerConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultServerInstanceListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_server_instance_listener',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionSecurity = config.connectionSecurity;
    this._listenAddress = config.listenAddress;
    this._listenerCertificate = config.listenerCertificate;
    this._name = config.name;
    this._purpose = config.purpose;
    this._serverHttpPort = config.serverHttpPort;
    this._serverInstanceName = config.serverInstanceName;
    this._serverLdapPort = config.serverLdapPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_security - computed: true, optional: true, required: false
  private _connectionSecurity?: string; 
  public get connectionSecurity() {
    return this.getStringAttribute('connection_security');
  }
  public set connectionSecurity(value: string) {
    this._connectionSecurity = value;
  }
  public resetConnectionSecurity() {
    this._connectionSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSecurityInput() {
    return this._connectionSecurity;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listen_address - computed: true, optional: true, required: false
  private _listenAddress?: string; 
  public get listenAddress() {
    return this.getStringAttribute('listen_address');
  }
  public set listenAddress(value: string) {
    this._listenAddress = value;
  }
  public resetListenAddress() {
    this._listenAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenAddressInput() {
    return this._listenAddress;
  }

  // listener_certificate - computed: true, optional: true, required: false
  private _listenerCertificate?: string; 
  public get listenerCertificate() {
    return this.getStringAttribute('listener_certificate');
  }
  public set listenerCertificate(value: string) {
    this._listenerCertificate = value;
  }
  public resetListenerCertificate() {
    this._listenerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerCertificateInput() {
    return this._listenerCertificate;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string[]; 
  public get purpose() {
    return cdktf.Fn.tolist(this.getListAttribute('purpose'));
  }
  public set purpose(value: string[]) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultServerInstanceListenerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // server_http_port - computed: true, optional: true, required: false
  private _serverHttpPort?: number; 
  public get serverHttpPort() {
    return this.getNumberAttribute('server_http_port');
  }
  public set serverHttpPort(value: number) {
    this._serverHttpPort = value;
  }
  public resetServerHttpPort() {
    this._serverHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHttpPortInput() {
    return this._serverHttpPort;
  }

  // server_instance_name - computed: false, optional: false, required: true
  private _serverInstanceName?: string; 
  public get serverInstanceName() {
    return this.getStringAttribute('server_instance_name');
  }
  public set serverInstanceName(value: string) {
    this._serverInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNameInput() {
    return this._serverInstanceName;
  }

  // server_ldap_port - computed: true, optional: true, required: false
  private _serverLdapPort?: number; 
  public get serverLdapPort() {
    return this.getNumberAttribute('server_ldap_port');
  }
  public set serverLdapPort(value: number) {
    this._serverLdapPort = value;
  }
  public resetServerLdapPort() {
    this._serverLdapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLdapPortInput() {
    return this._serverLdapPort;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_security: cdktf.stringToTerraform(this._connectionSecurity),
      listen_address: cdktf.stringToTerraform(this._listenAddress),
      listener_certificate: cdktf.stringToTerraform(this._listenerCertificate),
      name: cdktf.stringToTerraform(this._name),
      purpose: cdktf.listMapper(cdktf.stringToTerraform, false)(this._purpose),
      server_http_port: cdktf.numberToTerraform(this._serverHttpPort),
      server_instance_name: cdktf.stringToTerraform(this._serverInstanceName),
      server_ldap_port: cdktf.numberToTerraform(this._serverLdapPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_security: {
        value: cdktf.stringToHclTerraform(this._connectionSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_address: {
        value: cdktf.stringToHclTerraform(this._listenAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_certificate: {
        value: cdktf.stringToHclTerraform(this._listenerCertificate),
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
      purpose: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._purpose),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_http_port: {
        value: cdktf.numberToHclTerraform(this._serverHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_instance_name: {
        value: cdktf.stringToHclTerraform(this._serverInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_ldap_port: {
        value: cdktf.numberToHclTerraform(this._serverLdapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
